import styles from "./Habilities.module.scss";

import React from "react";
interface HabilitiesTagProps {
  color?: string;
  children: React.ReactNode;
}
export default function HabilitiesTag({
  color,
  children,
}: HabilitiesTagProps): React.ReactElement {
  return (
    <div
      className={styles["tag"]}
      style={{ "--accent-color": color } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
