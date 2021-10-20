
import './App.css';
import Quiz from './Quiz';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
   Redirect
  } from "react-router-dom";



function App() {
  return (
    <div >
      <Router>
        <Switch>
        <Route exact path="/" component={ Quiz} />
        




          

        </Switch>
      </Router>







      
    </div>
  );
}

export default App;
