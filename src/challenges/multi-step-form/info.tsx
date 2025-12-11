import type { InputField } from ".";

interface InfoProps {
  handleChangeInput: (inputField: InputField, value: string) => void;
  infoData: {
    name: string;
    email: string;
  };
}

export default function Info({ handleChangeInput, infoData }: InfoProps) {
  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">Personal Information</h2>

      <label htmlFor="username" className="text-blue-950">
        Preferred name:
      </label>
      <input
        type="text"
        id="username"
        required
        value={infoData.name}
        onChange={(e) => handleChangeInput("name", e.target.value)}
        className="block w-full py-1 px-2 mb-4 border border-black"
      />

      <label htmlFor="email" className="text-blue-950">
        Email address:
      </label>
      <input
        type="email"
        id="email"
        required
        value={infoData.email}
        onChange={(e) => handleChangeInput("email", e.target.value)}
        className="block w-full py-1 px-2 mb-4 border border-black"
      />
    </>
  );
}
