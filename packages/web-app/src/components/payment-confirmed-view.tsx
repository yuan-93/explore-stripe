"use client";
import Text from "@/components/text";
import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { Button } from "./ui/button";

export default function PaymentConfirmedView() {
  const searchParams = useSearchParams();

  const query = useQuery({
    queryKey: [searchParams.get("session-id")],
    queryFn: async () => {
      const response = await fetch(
        `${
          process.env.NEXT_PUBLIC_TEST_SERVER
        }/stripe/sessions/${searchParams.get("session-id")}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    enabled: searchParams.get("session-id") !== null,
  });

  return (
    <div className="flex flex-col gap-4 items-center">
      {query.data && (
        <>
          <Text as="h1" size="headline-small">
            Payment Confirmed
          </Text>
          <Text as="p">Thank you for your purchase!</Text>
          <Button asChild>
            <a
              href={`https://dashboard.stripe.com/test/payments/${query?.data?.payment_intent}`}
              target="_blank"
              rel="noreferrer"
            >
              View Payment in Stripe Dashboard
            </a>
          </Button>
        </>
      )}
    </div>
  );
}
