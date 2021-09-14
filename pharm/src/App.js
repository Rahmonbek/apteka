import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Component/LandingPage";
//import FooterA from "../src/Component/FooterA";
import Footer from "./Component/Foooter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Medicines from "./Medicines/Components/Medicines";
import InfoMedicine from "./Medicines/Components/InfoMedicine";
import ErrorPage from "./Medicines/Components/ErrorPage";
import Contact from "./Component/Contact";
import Apteka from "./Component/Apteka";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
            <Footer />
          </Route>
          <Route path="/dorilar">
            <Medicines />
            <Footer />
          </Route>
          <Route path="/ma'lumot">
            <InfoMedicine />
            <Footer />
          </Route>
          <Route path="/contact">
            <Contact />
            <Footer />
          </Route>
          <Route path="/apteka">
            <Apteka />
            <Footer />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
      
        </Switch>
      </Router>
    </div>
  );
}

export default App;
