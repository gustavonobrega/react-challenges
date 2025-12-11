import { useId } from "react";
import type { InputField } from ".";

interface PlanProps {
  handleChangePlan: (inputField: InputField, value: string) => void;
  currentPlan: string;
  plans: {
    value: string;
    label: string;
    description: string;
  }[];
}

export default function Plan({ handleChangePlan, currentPlan, plans }: PlanProps) {
  const id = useId();

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Select Plan</h2>

      <ul className="space-y-4">
        {plans.map((plan) => {
          const optionId = `radio-group-${id}-${plan.value}`;

          return (
            <li className="flex items-start gap-2 p-2 bg-white border border-slate-300 rounded-lg">
              <input
                type="radio"
                name="id"
                required
                id={optionId}
                value={plan.value}
                checked={plan.value === currentPlan}
                onChange={(e) => handleChangePlan("plan", e.target.value)}
                className="translate-y-1.5"
              />
              <label className="text-blue-950">
                <span className="font-semibold mb-0.5">{plan.label}</span>
                <p>{plan.description}</p>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}
