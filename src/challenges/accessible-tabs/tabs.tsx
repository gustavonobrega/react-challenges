import { type ComponentProps, type ReactNode } from "react";
import TabsProvider, { useTabs } from "./tabs-provider";

interface RootProps extends ComponentProps<"div"> {
  defaultValue: string;
  children: ReactNode;
}

export function Root({ defaultValue, children, ...props }: RootProps) {
  return (
    <TabsProvider defaultValue={defaultValue}>
      <div {...props}>{children}</div>
    </TabsProvider>
  );
}

interface ListProps extends ComponentProps<"div"> {
  children: ReactNode;
}

export function List({ children, ...props }: ListProps) {
  return (
    <div role="tablist" {...props}>
      {children}
    </div>
  );
}

interface TriggerProps extends ComponentProps<"button"> {
  value: string;
  children: ReactNode;
}

export function Trigger({ value, children, ...props }: TriggerProps) {
  const { currentTab, onTabChange, tabRefs, id } = useTabs();
  const tabIds = {
    trigger: `${id}-trigger-${value}`,
    content: `${id}-content-${value}`,
  };

  return (
    <button
      id={tabIds.trigger}
      role="tab"
      tabIndex={currentTab === value ? 0 : -1}
      aria-selected={value === currentTab}
      aria-controls={tabIds.content}
      ref={(el) => {
        tabRefs.current[value] = el;
      }}
      data-state={value === currentTab ? "active" : "inactive"}
      onClick={() => onTabChange(value)}
      {...props}
    >
      {children}
    </button>
  );
}

interface ContentProps extends ComponentProps<"div"> {
  value: string;
  className?: string;
  children: ReactNode;
}

export function Content({
  value,
  className = "",
  children,
  ...props
}: ContentProps) {
  const { currentTab, id } = useTabs();

  const tabIds = {
    trigger: `${id}-trigger-${value}`,
    content: `${id}-content-${value}`,
  };

  return (
    <div
      id={tabIds.content}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={tabIds.trigger}
      hidden={currentTab !== value}
      className={`${className} ${currentTab !== value ? "hidden" : "block"}`}
      {...props}
    >
      {children}
    </div>
  );
}
