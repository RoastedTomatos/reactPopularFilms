import React                                   from 'react';
import ReactDOM                                from 'react';
import Header                                  from './components/Header';
import {Wrapper}                               from './components/styles/styledComponents';
import { Footer }                              from './components/Footer';
import { HomePage }                            from './modules/home/page';
import { FavoritesPage }                       from './modules/favorites/page'; 
import { createBrowserHistory }                from 'history';
import {
  Router,
  Switch,
  Route,
}                                               from "react-router-dom";

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

