import express from "express";

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

// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const router = express.Router();

router.post("/webhook", express.json(), (request, response) => {
  const payload = request.body;

  console.log("Got payload: " + payload);

  const sig = request.headers["stripe-signature"];
  if (!sig) {
    throw new Error("No signature");
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (error: any) {
    return response.status(400).send(`Webhook Error: ${error.message}`);
  }

  response.status(200).end();
});

export default router;
