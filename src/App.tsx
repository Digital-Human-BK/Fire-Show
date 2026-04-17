import styles from "@/App.module.scss";

import { Router } from "@/router/router";

export const App = () => {
  return (
    <main className={styles.app}>
      <Router />
    </main>
  );
};
