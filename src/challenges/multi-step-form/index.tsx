import { useState, type FormEvent } from "react";
import StepList from "./step-list";
import Info from "./info";
import Plan from "./plan";
import Summary from "./summary";

const PLANS = [
  {
    value: "trial",
    label: "Free Trial",
    description:
      "Start a 2-week free trial, to test the application out and see what you think.",
  },
  {
    value: "advanced",
    label: "Advanced Package",
    description:
      "Take advantage of the full suite of tools. For students and professionals.",
  },
  {
    value: "team",
    label: "Team Package",
    description:
      "Onboard the entire team, for incredible synergy and productivity across the organization.",
  },
];

export interface FormData {
  name: string;
  email: string;
  plan: string;
}

export type InputField = keyof FormData;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    plan: "",
  });

  const isFinalStep = step === 3;

  function handleChangeFormData(inputField: InputField, value: string) {
    setFormData({ ...formData, [inputField]: value });
  }

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextStep = (step + 1);

    if (isFinalStep) {
      if (!formData.name || !formData.email || !formData.plan) {
        window.alert("Missing data");
      }

      alert(`Thanks ${formData.name} for signing up!`)
      handleResetForm()
      return;
    }

    setStep(nextStep);
  }

  function handleChangeStep(newStep: number) {
   const completedStep1 = formData.name && formData.email && formData.email.includes('@');

    if (newStep >= 2 && !completedStep1) {
      window.alert('Please provide a name and email before proceeding.')
      return;
    }

    if (newStep >= 3 && !formData.plan) {
      window.alert('Please select a plan before proceeding.')
      return;
    }

    setStep(newStep);
  }

  function handleResetForm() {
    setStep(1);
    setFormData({ name: "", email: "", plan: "" });
  }

  const selectedPlanData = PLANS.find((plan) => plan.value === formData.plan);

  return (
    <form className="flex flex-col min-h-svh" onSubmit={handleSubmitForm}>
      <header className="bg-blue-950 text-white py-6 px-2">
        <StepList currentStep={step} handleChangeStep={handleChangeStep} />
      </header>
      <section className="flex-1 p-8">
        {step === 1 && (
          <Info
            handleChangeInput={handleChangeFormData}
            infoData={{ name: formData.name, email: formData.email }}
          />
        )}
        {step === 2 && (
          <Plan
            handleChangePlan={handleChangeFormData}
            currentPlan={formData.plan}
            plans={PLANS}
          />
        )}
        {step === 3 && (
          <Summary
            data={{
              name: formData.name,
              email: formData.email,
              plan: selectedPlanData?.label || "(None Selected)",
            }}
          />
        )}
      </section>
      <footer className="flex justify-between p-8 bg-blue-100">
        <button
          className="py-2 px-6 font-medium bg-transparent text-blue-950 border border-blue-950 rounded-lg cursor-pointer"
          type="button"
          onClick={handleResetForm}
        >
          Reset
        </button>
        <button
          type="submit"
          className="py-2 px-6 font-medium bg-blue-950 text-white rounded-lg cursor-pointer"
        >
          {isFinalStep ? "Submit" : "Continue"}
        </button>
      </footer>
    </form>
  );
}
