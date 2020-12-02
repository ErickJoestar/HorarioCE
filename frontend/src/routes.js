import { Switch, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Main from "./views/Main";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <MainLayout>
          <Main />
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Routes;
