"use client";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Text from "./text";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not set");
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function StripedHostedPageCheckoutView() {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  // http://localhost:3000/paid?session-id=cs_test_b14RZYTl6oqnLXedAcPRhRAf8peJWDIdPNMupI3OjAX4Qm8GGYu17Y0O2n
  return (
    <div className="flex flex-col gap-4">
      <section>
        <Text as="h1" size="title-medium">
          Checkout with stripe-hosted page
        </Text>
        <Text>
          This method requires user to manage their products, coupons, shipping
          rates and tax rates at stripe dashboard.
        </Text>
      </section>
      <section className="flex flex-col gap-4">
        <Text as="h2" size="title-small">
          Checkout with stripe pricing table
        </Text>
        <stripe-pricing-table
          pricing-table-id={process.env.NEXT_PUBLIC_STANDARD_PRICING_TABLE_ID}
          publishable-key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
        />
      </section>
      {/* <Text>Product list from stripe</Text>
      <form
        action="http://localhost:5000/stripe/create-checkout-session"
        method="POST"
      >
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 400px;
              height: 112px;
              border-radius: 6px;
              justify-content: space-between;
            }
            button {
              height: 36px;
              background: #556cd6;
              border-radius: 4px;
              color: white;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </form> */}
    </div>
  );
}
