import React from "react";
import ReactDOM from "react-dom";
import { Header, Margin } from "components/Header";
import { Footer } from "components/Footer";
import Home from "components/Pages/home";
import { About } from "components/Pages/about";
import { Services } from "components/Pages/services";
import { Testimonials } from "components/Pages/testimonials";
import { Contact } from "components/Pages/contact";
import { Login } from "components/Pages/login";
import { Page404 } from "components/Pages/404";
import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "assets/modules/ScrollToTop";
import "index.css";

ReactDOM.render(
  <BrowserRouter>
    <Helmet titleTemplate="%s - WorkPoint" defaultTitle="WorkPoint">
      <meta name="description" content="React.js application" />
    </Helmet>
    <Header />
    <Margin />
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Home} title="Home Page" />
        <Route path="/about" component={About} title="About" />
        <Route path="/services" component={Services} title="Services" />
        <Route path="/testimonials" component={Testimonials} title="Testimonials" />
        <Route path="/contact" component={Contact} title="Contact" />
        <Route path="/login" component={Login} title="Login" />
        <Route component={Page404} title="Erro 404" />
      </Switch>
    </ScrollToTop>
    <Footer />
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
