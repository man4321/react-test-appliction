import logo from "./logo.svg";
import "./App.css";
import Layout from "./beting/layout";
import { Switch, Route } from "react-router-dom";
import PlayerList from './beting/playerList'
import Beting from './beting/beting'
function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <Route path="/" exact component={PlayerList} />
          <Route path="/bet" exact component={Beting}/>
          {/* <Route path="/rejected" exact component={Rejected}/> */}
          {/* <Route path="/:id" exact component={CandidateProfile}/> */}
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
