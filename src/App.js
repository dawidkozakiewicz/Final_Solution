import Beginning from './Beginning'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Outcomings from './Outcomings'




function App() {
  return (
    <Router>
      <div className="Navbar">
        <Link className="Link" to="/wychodzace">WYCHODZĄCE</Link>
        <Link className="Link" to="/przychodzace">PRZYCHODZĄCE</Link>
      </div>
      <div className="Beginning" >
        <a href="http://dawidkozakiewicz.com/" target="_blank"><div className="author">O AUTORZE</div></a>
        <Link to="/"><button className="reset">RESET</button></Link>
        <Switch>
          <Route exact path="/">
            <h1>Cześć! :-) Wybierz z menu typ połączenia :-)</h1>
          </Route>
          <Route path="/przychodzace">
            <Beginning />
          </Route>
          <Route path="/wychodzace">
            <Outcomings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
