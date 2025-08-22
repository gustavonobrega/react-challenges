import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";

interface TabsContextType {
  currentTab: string;
  onTabChange: (tab: string) => void;
  tabRefs: RefObject<Record<string, HTMLButtonElement | null>>;
  id: string;
}

const TabsContext = createContext<TabsContextType | null>(null);

export default function TabsProvider({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: ReactNode;
}) {
  const [currentTab, setCurrentTab] = useState(defaultValue);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const id = useId();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const tabs = Object.keys(tabRefs.current);
      const currentIndex = tabs.indexOf(currentTab);

      const firstIndex = 0;
      const lastIndex = tabs.length - 1;
      let nextIndex: number;

      switch (event.key) {
        case "ArrowLeft":
          nextIndex =
            currentIndex === firstIndex ? lastIndex : currentIndex - 1;
          setCurrentTab(tabs[nextIndex]);
          tabRefs.current[tabs[nextIndex]]?.focus();
          break;

        case "ArrowRight":
          nextIndex =
            currentIndex === lastIndex ? firstIndex : currentIndex + 1;
          setCurrentTab(tabs[nextIndex]);
          tabRefs.current[tabs[nextIndex]]?.focus();
          break;

        case "Home":
          setCurrentTab(tabs[firstIndex]);
          tabRefs.current[tabs[firstIndex]]?.focus();
          break;

        case "End":
          setCurrentTab(tabs[lastIndex]);
          tabRefs.current[tabs[lastIndex]]?.focus();
          break;

        default:
          return;
      }
    }

    const tabElements = Object.values(tabRefs.current);
    if (tabElements.length === 0) return;

    tabElements.forEach((tab) => {
      tab?.addEventListener("keydown", handleKeyDown);
    });

    return () => {
      tabElements.forEach((tab) => {
        tab?.removeEventListener("keydown", handleKeyDown);
      });
    };
  }, [currentTab]);

  function onTabChange(tab: string) {
    setCurrentTab(tab);
  }

  return (
    <TabsContext value={{ currentTab, onTabChange, tabRefs, id }}>
      {children}
    </TabsContext>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTabs() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabs must be within a TabsProvider");
  }

  return context;
}
