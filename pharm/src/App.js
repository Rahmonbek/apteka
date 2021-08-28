import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Component/LandingPage";
import Footer from "./Component/Foooter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Medicines from "./Medicines/Components/Medicines";
import InfoMedicine from "./Medicines/Components/InfoMedicine";
import ErrorPage from "./Medicines/Components/ErrorPage";
import Carouselll from "./Component/Carousel/Carousel";
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
          </Route>

          <Route path="/ma'lumot">
            <InfoMedicine />
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
