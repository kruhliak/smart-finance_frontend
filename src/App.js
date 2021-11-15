import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.css';
import { useDispatch } from 'react-redux';

import Loader from 'react-loader-spinner';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { fetchUser } from 'redux/operations/auth-operation';

import { useLocation } from 'react-router';
import { setGoogleToken } from 'redux/operations/auth-operation';

const HomePage = lazy(() =>
  import('views/HomePage' /* webpackChunkName: "home-page" */),
);

const RegisterPage = lazy(() =>
  import(
    'views/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  ),
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

const TestPage = lazy(() =>
  import('views/TestPage' /* webpackChunkName: "test-page" */),
);

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  if (location.search) {
    const googleToken = location.search.slice(1, location.search.length);
    dispatch(setGoogleToken(googleToken));
  }

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div id="container">
      <Suspense
        fallback={<Loader type="Oval" color="#ff751d" height={50} width={50} />}
      >
        <Switch>
          {/* <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/report">
            <ReportPage />
          </Route>

          <Route path="/test">
            <TestPage />
          </Route> */}

          <PrivateRoute exact path="/" redirectTo="/login">
            <HomePage />
          </PrivateRoute>

          <PublicRoute path="/login" restricted redirectTo="/">
            <LoginPage />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/">
            <RegisterPage />
          </PublicRoute>

          <PrivateRoute path="/report" redirectTo="/">
            <ReportPage />
          </PrivateRoute>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
