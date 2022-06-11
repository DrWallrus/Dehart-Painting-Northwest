import css from "./PageContainer.css";

export function PageContainer({ children }) {
  return <main className={css.main}>{children}</main>;
}
