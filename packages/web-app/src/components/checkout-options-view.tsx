import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const cards = [
  {
    title: "Striped-Hosted page",
    description:
      "Create products at stripe and checkout using redirection to stripe page",
    link: "/stripe-checkout",
  },
  {
    title: "Custom Payment flow",
    description:
      "Create products at own server and checkout using stripe elements",
    link: "/stripe-custom-checkout",
  },
];

export default function CheckoutOptionsView() {
  return cards.map((card) => (
    <div className="col-span-4">
      <Card>
        <CardHeader>
          <CardTitle>{card.title}</CardTitle>
          <CardDescription>{card.description}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild>
            <Link href={card.link}>Checkout</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  ));
}
