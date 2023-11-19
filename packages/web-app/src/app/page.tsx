import CheckoutOptionsView from "@/components/checkout-options-view";

export default function Home() {
  return (
    <div className="mx-auto my-6 w-full grid grid-cols-12 gap-4 max-w-screen-lg">
      <CheckoutOptionsView />
    </div>
  );
}
