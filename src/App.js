import React from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import PhotoContextProvider from './context/PhotoContext';

function App() {
  const handleSubmit = (e,history,searchInput)=>{
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };
  
  return (
    <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route render={(props)=> <Header handleSubmit={handleSubmit} history={props.history} />}/>
            <Switch>
              <Route exact path="/" render={()=> <Redirect to="/mountain" />} />
              <Route path="/mountain" render={()=> <Item searchTerm="mountain" />}/>
              <Route path="/beach" render={()=> <Item searchTerm="beach" />} />
              <Route path="/bird" render={()=> <Item searchTerm="bird" />} />
              <Route path="/food" render={()=> <Item searchTerm="food" />} />
              <Route path="/search/:searchInput" render={(props)=> <Search searchTerm={props.match.params.searchInput} />}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
    </PhotoContextProvider>
  );
}

export default App;
