import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('views/HomePage' /* webpackChunkName: "home-page" */),
);

const LoginPage = lazy(() =>
  import('views/LoginPage/LoginPage' /* webpackChunkName: "login-page" */),
);

const ReportPage = lazy(() =>
  import('views/ReportPage' /* webpackChunkName: "report-page" */),
);
const NotFoundPage = lazy(() =>
  import('views/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);

export default function App() {
  return (
    <div id="container">
      <Suspense
        fallback={<Loader type="Oval" color="#ff751d" height={50} width={50} />}
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/report">
            <ReportPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
