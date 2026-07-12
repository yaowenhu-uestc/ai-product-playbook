import { DurableObject } from "cloudflare:workers";

const allowedOrigin = "https://yaowenhu-uestc.github.io";

function chinaDay() {
  const values = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
      .formatToParts(new Date())
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, value]),
  );

  return `${values.year}-${values.month}-${values.day}`;
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

export default {
  async fetch(request, env) {
    if (request.headers.get("Origin") !== allowedOrigin) {
      return new Response("Forbidden", { status: 403 });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== "POST" || new URL(request.url).pathname !== "/count") {
      return new Response("Not Found", { status: 404, headers: corsHeaders() });
    }

    const id = env.VISIT_COUNTER.idFromName("ai-product-playbook");
    const response = await env.VISIT_COUNTER.get(id).fetch("https://counter/count");
    const headers = new Headers(response.headers);
    Object.entries(corsHeaders()).forEach(([name, value]) => headers.set(name, value));
    return new Response(response.body, { status: response.status, headers });
  },
};

export class VisitCounter extends DurableObject {
  constructor(ctx, env) {
    super(ctx, env);
    this.sql = ctx.storage.sql;
    this.sql.exec(
      "CREATE TABLE IF NOT EXISTS counters (id INTEGER PRIMARY KEY CHECK (id = 1), total INTEGER NOT NULL, day TEXT NOT NULL, today INTEGER NOT NULL)",
    );
    this.sql.exec(
      "INSERT OR IGNORE INTO counters (id, total, day, today) VALUES (1, 0, '', 0)",
    );
  }

  async fetch() {
    const day = chinaDay();
    this.sql.exec(
      "UPDATE counters SET total = total + 1, today = CASE WHEN day = ? THEN today + 1 ELSE 1 END, day = ? WHERE id = 1",
      day,
      day,
    );
    const counter = this.sql.exec("SELECT total, today FROM counters WHERE id = 1").one();

    return Response.json(counter);
  }
}
