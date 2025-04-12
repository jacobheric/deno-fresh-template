import "@std/dotenv/load";

export const STRIPE_PUBLIC_KEY = Deno.env.get("STRIPE_PUBLIC_KEY");
export const STRIPE_SECRET_KEY = Deno.env.get("STRIPE_SECRET_KEY");
