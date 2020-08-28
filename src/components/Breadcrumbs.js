import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './Breadcrumbs.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import routes from '../config/routes';
import configMachine from '../machines/Configurator';
import Logo from '../images/logo/logo-white.png';

export const Breadcrumbs = (props) => {
  const [step, redirect] = useSelector((state) => [state.step, state.redirect]);

  function send(event) {
    configMachine.send(event);
  }

  return (
    <Router>
      <Breadcrumb>
        <img src={Logo} alt="alpine logo" />

        {routes.map(({ path, event, name }, key) => {
          return (
            <Breadcrumb.Item
              key={key}
              linkAs={Link}
              linkProps={{ to: path }}
              onClick={() => send(event)}
              active={step === event}
            >
              {name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
      {redirect ? <Redirect to={redirect} /> : null}
      {/* <Redirect to="/rims" /> */}
      <Switch>
        {routes.map(({ path, Component }, key) => {
          return (
            <Route
              exact
              path={path}
              key={key}
              render={(props) => {
                return <Component {...props} path={props.match.path} />;
              }}
            />
          );
        })}
      </Switch>
      {props.children}
    </Router>
  );
};
