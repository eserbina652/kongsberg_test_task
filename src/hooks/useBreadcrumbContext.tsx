import React, { createContext, ReactNode, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const BreadcrumbContext = createContext({});
interface BreadcrumbProviderProps {
  children: ReactNode;
}

export function BreadcrumbProvider({ children }: BreadcrumbProviderProps) {
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const navigate = useNavigate();
  const addBreadcrumb = (route: string, options: object) => {
    setBreadcrumbs((prevBreadcrumbs: string[]) => {
      if (prevBreadcrumbs.includes(route)) {
        return [...prevBreadcrumbs];
      } else {
        return [...prevBreadcrumbs, route];
      }
    });
    navigate(route, options);
  };

  const goToSelectedBreadcrumb = (route: string) => {
    const temp = breadcrumbs.findIndex((el) => el === route);
    setBreadcrumbs((prevState) => prevState.slice(0, temp));
    navigate(route);
  };

  return (
    <BreadcrumbContext.Provider
      value={{ breadcrumbs, addBreadcrumb, goToSelectedBreadcrumb }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
}

export function useBreadcrumbContext() {
  return useContext(BreadcrumbContext);
}
