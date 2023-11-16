import CheckoutView from "@/components/CheckoutView";
import TopNavigationBar from "@/components/TopNavigationBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNavigationBar title="Explore Stripe" />
      <div className="max-w-lg mx-auto my-6">
        <CheckoutView />
      </div>
    </main>
  );
}
