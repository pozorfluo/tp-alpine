import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from 'react-router-dom';
import './Breadcrumbs.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import routes from '../config/routes';
import { useConfigMachineEmit } from '../machines';
import Logo from '../images/logo/logo-white.png';
import { OptionList } from './';

export const Breadcrumbs = (props) => {
  const step = useSelector((state) => state.step);
  const emit = useConfigMachineEmit();

  return (
    <Router>
      <Breadcrumb>
        <img src={Logo} alt="alpine logo" className="logo" />

        {routes.map(({ path, event, name }, key) => {
          const target = path.substring(1);
          return (
            <Breadcrumb.Item
              key={key}
              onClick={() => {
                emit(event, target);
              }}
              active={step === target}
            >
              {name}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
      {props.children}
      <Redirect to={step} />
      <OptionList>
        <Loc emit={emit}/>
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
      </OptionList>
    </Router>
  );
};

const Loc = (props) => {
  let history = useHistory();
  const emit = props.emit;
  useEffect(() => {
    return history.listen((location) => {
      emit('nav', location.pathname.substring(1));
      console.log('nav', location.pathname.substring(1));
    });
  }, [history, emit]);
  return null;
};
