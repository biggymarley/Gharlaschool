import { Badge, BadgePercentIcon, Check } from "lucide-react";
import { PopupButton } from "react-calendly";
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
            <div
              key={tier.tier}
              className="relative bg-gray-900 rounded-lg p-8 flex flex-col"
            >
              {tier.isDiscounted ? (
                <div className="absolute left-[-10px] md:left-[-20px] top-[-20px]">
                  <Badge className=" text-yellow-500" size={60} fill="#111827" />
                  <span className="font font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    {tier.discount}
                  </span>
                </div>
              ) : null}
              <h3 className="text-2xl font-bold mb-4 text-center">
                {tier.tier}
              </h3>
              <p className="font text-3xl font-bold text-yellow-500 text-center ">
                {tier.price}
              </p>
              <p className="text-md font-light text-gray-300 text-center mb-6">
                {tier.subTitle}
              </p>
              <ul className="space-y-4 mb-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <PopupButton
                url="https://calendly.com/skategharla/30min"
                rootElement={document.getElementById("root")}
                text={`Choose ${tier.tier}`}
                className="w-full bg-yellow-400 hover:bg-yellow-700 text-black py-3 rounded-lg mt-auto transition-all font-bold"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
