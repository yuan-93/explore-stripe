import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error(
    "Missing Stripe secret key. Make sure you have a .env file with STRIPE_SECRET_KEY set"
  );
}

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error(
    "Missing Stripe webhook secret. Make sure you have a .env file with STRIPE_WEBHOOK_SECRET set"
  );
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default stripe;
