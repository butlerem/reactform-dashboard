"use client";
import { PricingPlan } from "./pricing-section";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

const PricingCard = ({ title, price, description, features, isPopular, url }: PricingPlan) => {
  const router = useRouter();

  const onClick = () => {
    router.push(url);
  }

  return (
    <div className="border border-[var(--border)] flex flex-col justify-between bg-[var(--card-alt)] rounded-lg h-full p-6 hover:shadow-md text-left relative">
      {
        isPopular && (
          <div className="absolute top-0 right-0 bg-[var(--primary)] text-[var(--primary-foreground)] px-2 py-1 rounded-bl-lg rounded-tr-lg">
            Popular
          </div>
        )
      }
      <div>
        <div className="inline-flex items-end">
          <h1 className="font-extrabold text-3xl text-[var(--foreground)]">${price}</h1>
        </div>
        <h2 className="font-bold text-xl my-2 text-[var(--foreground)]">
          {title}
        </h2>
        <p className="text-[var(--muted-foreground)]">{description}</p>
        <div className="flex-grow border-t border-[var(--border)] opacity-25 my-3"></div>
        <ul>
          {
            features.map((feature, index) => (
              <li key={index} className="flex flex-row items-center text-[var(--foreground)] gap-2 my-2">
                <div className="rounded-full flex items-center justify-center bg-[var(--primary)] w-4 h-4 mr-2">
                  <Check className="text-[var(--primary-foreground)]" width={10} height={10} />
                </div>
                <p>{feature}</p>
              </li>
            ))
          }
        </ul>
      </div>
      <div>
        <button onClick={onClick} className="bg-[var(--primary)] hover:bg-[var(--primary-hover)] py-2 mt-3 rounded-lg text-[var(--primary-foreground)] w-full">
          Select Plan
        </button>
      </div>
    </div>
  );
}

export default PricingCard;
