import type { FormData } from ".";

interface SummaryProps {
  data: FormData;
}

export default function Summary({ data }: SummaryProps) {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Order Summary</h2>

      <dl className="border border-dashed border-slate-300 p-4">
        <dt className="font-bold text-blue-950">Name:</dt>
        <dd className="not-last-of-type:mb-4">{data.name}</dd>

        <dt className="font-bold text-blue-950">Email:</dt>
        <dd className="not-last-of-type:mb-4">{data.email}</dd>

        <dt className="font-bold text-blue-950">Plan:</dt>
        <dd className="not-last-of-type:mb-4">{data.plan}</dd>
      </dl>
    </>
  );
}
