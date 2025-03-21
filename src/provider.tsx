import type { NavigateOptions } from "react-router-dom";

import { HeroUIProvider } from "@heroui/system";
import { useHref } from "react-router-dom";
import { ToastProvider } from "@heroui/react";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  // const navigate = useNavigate();

  return (
    <HeroUIProvider useHref={useHref}>
      <ToastProvider
        toastProps={{
          radius: "full",
          color: "primary",
          variant: "flat",
          timeout: 1000,
          hideIcon: true,
          classNames: {
            closeButton: "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
          },
        }}
      />
      {children}
    </HeroUIProvider>
  );
}
