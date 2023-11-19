import CheckoutView from "@/components/checkout-view";
import TopNavigationBar from "@/components/top-navigation-bar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto my-6">
      <CheckoutView />
    </div>
  );
}
