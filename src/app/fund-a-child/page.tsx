import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donation",
  description: "Support Tennista Foundation and help young people thrive through tennis, education, and life skills.",
  alternates: { canonical: "/fund-a-child" },
};

export default function DonationPage() {
  return (
    <section aria-labelledby="donation-heading" className="bg-white">
      <h1 id="donation-heading" className="sr-only">
        Donation
      </h1>
      <img
        src="/donation-banner.jpg"
        alt="Donation. A tennis racket, ball, and wrapped gift on a blue background."
        className="h-auto w-full"
      />
      <div
        id="donation-provider"
        data-donation-provider="pending"
        className="min-h-[34rem] sm:min-h-[42rem]"
        aria-label="Donation form"
      >
        <p className="sr-only">The secure third-party donation form will be connected here.</p>
      </div>
    </section>
  );
}
