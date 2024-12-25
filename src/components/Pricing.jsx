import { Check } from "lucide-react";
import { pricing } from "../data/data";

export const Pricing = () => {
 
  return (
    <section className="py-20 bg-gray-800 px-4" id="plans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font">
          Choose Your Path
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((tier) => (
            <div key={tier.tier} className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                {tier.tier}
              </h3>
              <p className="text-3xl font-bold text-yellow-500 text-center mb-6">
                {tier.price}
              </p>
              <ul className="space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.instagram.com/gharla_skate_school/"
                target="_blank"
              >
                <button className="w-full bg-yellow-400 hover:bg-yellow-700 text-black py-3 rounded-lg mt-8 transition-all">
                  Choose {tier.tier}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};