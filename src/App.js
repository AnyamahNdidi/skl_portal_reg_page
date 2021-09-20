import logo from './logo.svg';
import './App.css';
import Stel from "../src/Component/SteReg/Stel"
import { AppProvider } from "./Component/SteReg/GlobalContext/GlobalContext"
import Studentlog from "./Component/SteReg/StudenLog/Studentlog"
import AdminPage from "./Component/SteReg/AdminPage/AdminPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <AppProvider>
        <Router>
          {/* <HeaderNav /> */}
          <Switch>
            <Route path="/" exact component={Stel} />
            <Route path="/stu" exact component={Studentlog} />
            <Route path="/portal" exact component={AdminPage} />
          </Switch>
        </Router>
      </AppProvider>


    </div>
  );
}

export default App;
