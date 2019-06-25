import React from 'react';
import {Router, Route, Switch} from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import PropertyCreate from './properties/PropertyCreate'
import PropertyEdit from './properties/PropertyEdit'
import PropertyDelete from './properties/PropertyDelete'
import PropertiesList from './properties/PropertiesList'
import PropertyGeosuggest from './properties/PropertyGeosuggest'
import history from '../history'

console.log(process.env.REACT_APP_API_KEY)
const App =()=>{
  return (
    <div className="ui container">

      <Router history={history}>
        <div>
          <Header/>
          <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/properties/new" exact component={PropertyCreate}/>
            <Route path="/properties/geosuggest" exact component={PropertyGeosuggest}/>
            <Route path="/properties/edit/:id" exact component={PropertyEdit}/>
            <Route path="/properties/delete/:id" exact component={PropertyDelete}/>
            <Route path="/properties/mylist" exact component={PropertiesList}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
  }

  export default App
