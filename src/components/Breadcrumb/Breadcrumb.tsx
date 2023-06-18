import React from "react";
import { useBreadcrumbContext } from "../../hooks/useBreadcrumbContext";
import styles from "./Breadcrumb.module.scss";

interface BreadcrumbContextType {
  breadcrumbs: string[];
  goToSelectedBreadcrumb: (breadcrumb: string) => void;
}

export default function Breadcrumb() {
  const { breadcrumbs, goToSelectedBreadcrumb } =
    useBreadcrumbContext() as BreadcrumbContextType;
  const breadcrumbPattern = /\w/g;
  return (
    <div className={styles.breadcrumb_wrap}>
      {breadcrumbs.map((breadcrumb, i) => {
        if (breadcrumb.includes("characters") && breadcrumb.length > 12) {
          return (
            <div className={styles.lastBreadcrumb} key={i.toString()}>
              {breadcrumb.match(breadcrumbPattern)}
            </div>
          );
        } else if (breadcrumb.length < 2) {
          return null;
        } else {
          return (
            <div
              className={styles.breadcrumb}
              key={i.toString()}
              onClick={() => goToSelectedBreadcrumb(breadcrumb)}
            >
              {breadcrumb.match(breadcrumbPattern)}
            </div>
          );
        }
      })}
    </div>
  );
}
