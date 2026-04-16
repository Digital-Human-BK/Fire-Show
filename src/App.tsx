import classes from "@/App.module.scss";

import { Router } from "@/router/router";

export const App = () => {
  return (
    <main className={classes.app}>
      <Router />
    </main>
  );
};
