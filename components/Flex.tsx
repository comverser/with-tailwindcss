export interface Props {
  gap?: string;
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  items?: "start" | "end" | "center" | "baseline" | "stretch";
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export function Flex({ gap, justify, items, children }: Props) {
  const styles = [
    "flex",
    `gap-${gap || "0"}`,
    `justify-${justify || "center"}`,
    `items-${items || "center"}`,
    "bg-slate-300",
  ].join(" ");

  return <div className={styles}>{children}</div>;
}
