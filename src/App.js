import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';

import Loader from 'react-loader-spinner';
// import PrivateRoute from 'components/PrivateRoute';
// import PublicRoute from 'components/PublicRoute';

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

          {/* <PrivateRoute exact path="/" redirectTo="/login">
            <HomePage />
          </PrivateRoute>

          <PublicRoute path="/login" restricted redirectTo="/">
            <LoginPage />
          </PublicRoute>

          <PrivateRoute path="/report" restricted redirectTo="/">
            <ReportPage />
          </PrivateRoute> */}

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
