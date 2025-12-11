const STEPS = [
  {
    value: 1,
    label: "INFO",
  },
  {
    value: 2,
    label: "PLAN",
  },
  {
    value: 3,
    label: "SUMMARY",
  }
]

interface StepListProps {
  currentStep: number;
  handleChangeStep: (nextStep: number) => void;
}

export default function StepList({
  currentStep,
  handleChangeStep,
}: StepListProps) {
  return (
    <ul className="flex justify-center gap-4">
      {STEPS.map((step) => (
        <li key={step.value}>
          <button
            className="flex flex-col items-center gap-2 w-20 data-[current=true]:opacity-100 opacity-60"
            type="button"
            data-current={currentStep === step.value}
            onClick={() => handleChangeStep(step.value)}
          >
            <span className="flex items-center justify-center border border-blue-100 rounded-full w-8 h-8">
              {step.value}
            </span>
            {step.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
