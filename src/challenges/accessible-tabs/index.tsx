import { data } from "./data";
import * as Tabs from "./tabs";

// Compound Component Pattern

export default function AccesibleTabs() {
  const tabs = Object.entries(data);
  
  return (
    <div className="min-h-svh grid justify-items-center">
      <Tabs.Root defaultValue={tabs[0][0]} className="mt-10">
        <Tabs.List className="flex gap-1 p-1 bg-gray-100 rounded-sm">
          {tabs.map(([key, value]) => (
            <Tabs.Trigger
              className="px-3 py-1.5 text-sm font-medium rounded-sm transition-all select-none text-gray-400 outline-none hover:text-gray-500 focus-visible:border-ring focus-visible:ring-current/50 focus-visible:ring-[3px] data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow-xs"
              key={key}
              value={key}
            >
              {value.title}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {tabs.map(([key, value]) => (
          <Tabs.Content key={key} value={key} className="text-center mt-4 outline-none">
            <h3 className="text-xl font-bold">{value.title}</h3>
            <p className="text-gray-600">{value.content}</p>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}
