import React from "react";
import BG3 from "../../assets/afterHome/APIAfterLogin3.png";

const plans = [
  {
    name: "Basic",
    keys: "1 Key",
    credits: "10 Renders",
    usage: "For personal or early-stage testing",
  },
  {
    name: "Silver",
    keys: "5 Keys",
    credits: "1000 Renders",
    usage: "Ideal for startups or small teams",
  },
  {
    name: "Gold",
    keys: "10 Keys",
    credits: "Unlimited*",
    usage: "Built for agencies, platforms, or scaling apps",
  },
];

const AfterPlan = () => {
  return (
    <div
      className="w-full flex flex-col items-center px-4 py-10 pb-[60px] md:pb-[80px] bg-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${BG3})` }}
    >
      <h2 className="w-full max-w-[90%] text-center font-medium text-[clamp(16px,4vw,20px)] sm:text-[clamp(18px,5vw,22px)] leading-[100%]">
        <span className="text-[#8A38F5] font-[Lora]">API</span>
        <span className="text-white font-[Lora]"> Access Based on Your Plan</span>
      </h2>

      {/* Table */}
      <div className="w-full max-w-[90%] min-h-[200px] rounded-[20px] mt-6 md:mt-10 relative overflow-hidden">
        <table className="w-full text-center text-[clamp(10px,2.5vw,12px)] sm:text-[clamp(12px,3vw,14px)] text-[#2A2A2A] border-collapse outline-none rounded-bl-[20px] rounded-br-[20px]">
          <thead
            className="w-full min-h-[50px] rounded-tl-[20px] rounded-tr-[20px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(138, 56, 245, 0.2) 0%, rgba(194, 44, 162, 0.12) 124.19%)",
            }}
          >
            <tr>
              <th
                className="px-2 py-3 md:px-6 md:py-4 border-r border-[#E0E0E0] text-center font-[Poppins] font-medium text-[clamp(12px,3vw,16px)] sm:text-[clamp(14px,3.5vw,18px)] leading-[100%] text-white"
              >
                Plan
              </th>
              <th
                className="px-2 py-3 md:px-6 md:py-4 border-r border-[#E0E0E0] text-center font-[Poppins] font-medium text-[clamp(12px,3vw,16px)] sm:text-[clamp(14px,3.5vw,18px)] leading-[100%] text-white"
              >
                API Keys Included
              </th>
              <th
                className="px-2 py-3 md:px-6 md:py-4 border-r border-[#E0E0E0] text-center font-[Poppins] font-medium text-[clamp(12px,3vw,16px)] sm:text-[clamp(14px,3.5vw,18px)] leading-[100%] text-white"
              >
                Monthly Credits
              </th>
              <th
                className="px-2 py-3 md:px-6 md:py-4 border-r border-[#E0E0E0] text-center font-[Poppins] font-medium text-[clamp(12px,3vw,16px)] sm:text-[clamp(14px,3.5vw,18px)] leading-[100%] text-white"
              >
                Usage Scenario
              </th>
            </tr>
          </thead>
          <tbody
            className="gradient-bg"
            style={{
              background: "#FFFFFF1F",
              border: "1px solid #000000",
            }}
          >
            {plans.map((plan, idx) => (
              <tr
                key={idx}
                className="border-t"
                style={{ borderBottom: "1px solid #000000" }}
              >
                <td className="px-2 py-3 md:px-6 md:py-4 text-[clamp(10px,2.5vw,12px)] sm:text-[clamp(12px,3vw,14px)]">
                  {plan.name}
                </td>
                <td className="px-2 py-3 md:px-6 md:py-4 text-[clamp(10px,2.5vw,12px)] sm:text-[clamp(12px,3vw,14px)]">
                  {plan.keys}
                </td>
                <td className="px-2 py-3 md:px-6 md:py-4 text-[clamp(10px,2.5vw,12px)] sm:text-[clamp(12px,3vw,14px)] font-bold">
                  {plan.credits}
                </td>
                <td className="px-2 py-3 md:px-6 md:py-4 text-[clamp(10px,2.5vw,12px)] sm:text-[clamp(12px,3vw,14px)] font-bold">
                  {plan.usage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AfterPlan;