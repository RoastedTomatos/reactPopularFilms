import Header                                  from './components/Header';
import { Wrapper }                             from './components/styles/commonStyledComponents';
import { Footer }                              from './components/Footer';
import { HomePage }                            from './containers/HomePage';
import { FavoritesPage }                       from './containers/FavoritesPage';
import { createBrowserHistory }                from 'history';
import {
  Router,
  Switch,
  Route,
}                                              from "react-router-dom";
import { ErrorMesage } from './components/ErrorMessage/ErrorMessage';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <Router history={browserHistory}>
      <Wrapper>
        <>
          <Header />
        </>
        <>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route component={ErrorMesage} />
          </Switch>
        </>
        <>
          <Footer />
        </>
      </Wrapper>
    </Router>

  )
}

export default App;

