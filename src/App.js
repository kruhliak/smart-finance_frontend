import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loader from 'react-loader-spinner';

const HomePage = lazy(() =>
  import('views/HomePage' /* webpackChunkName: "home-page" */),
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
  return (
    <div id="container">
      <Suspense
        fallback={<Loader type="Oval" color="#ff751d" height={50} width={50} />}
      >
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/report">
            <ReportPage />
          </Route>

          <Route path="/test">
            <TestPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
