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

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

const priceId = "price_1OCh4VEwGMzQSU35zWcMXpml";

router.get("/", async (req, res) => {
  res.send("Hello from checkout-sessions.ts");
});

router.post("/create-checkout-session", express.json(), async (req, res) => {
  try {
    console.log("create-checkout-session");
    // Create Checkout Sessions from body params.
    const data = req.body;
    console.log("data", data);

    // const customer = await fetch("https://api.stripe.com/v1/customers", {)

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });
    console.log("session", session);
    res.redirect(303, session.url || "/");
  } catch (error: any) {
    res.status(error.statusCode || 500).json(error.message);
  }
});

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

router.get("/sessions/:id", async (request, response) => {
  try {
    const sessionId = request.params.id;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return response.status(200).json(session);
  } catch (error: any) {
    return response.status(400).json(error.message);
  }
});

export default router;
