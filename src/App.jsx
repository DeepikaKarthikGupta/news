import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>        
          <Switch>
            <Route path="/Home" component={Home} />
            <Route path="/news/:id" component={News} />
            <Route render={() =>
              <Redirect to="/Home" />
            } />
          </Switch>        
      </main>
      <Footer />
    </>
  );
}

export default App;