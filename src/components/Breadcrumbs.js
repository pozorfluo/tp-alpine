import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from 'react-router-dom';
import './Breadcrumbs.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import routes from '../config/routes';
import configMachine from '../machines/Configurator';
import Logo from '../images/logo/logo-white.png';

export const Breadcrumbs = (props) => {
  const step = useSelector((state) => state.step);

  return (
    <Router>
      <Breadcrumb>
        <img src={Logo} alt="alpine logo" />

        {routes.map(({ path, name }, key) => {
          const to = path.substring(1);
          return (
            <Breadcrumb.Item
              key={key}
              // linkAs={Link}
              // linkProps={{ to: path }}
              onClick={() => {
                configMachine.send('nav', to);
              }}
              active={step === to}
            >
              {name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
      <Redirect to={step} />
      <Loc></Loc>
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

const Loc = (props) => {
  let history = useHistory();
  // const step = useSelector((state) => state.step);

  // console.log('history', history);
  useEffect(() => {
    return history.listen((location) => {
      // configMachine.send('nav', location);
      console.log('nav', location.pathname.substring(1));
    });
  }, [history]);
  return null;
};
