import * as React from 'react';
import {hot} from 'react-hot-loader';
import {Route, Switch} from 'react-router-dom';
import {scrollOnMount} from '../common/ScrollOnMountHoc';
import {appConfig} from '../config/appConfig';
import {isDevEnv} from '../config/env';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path={appConfig.routes.landingPage} component={LandingPageWrapped}/>
        <Route path={appConfig.routes.login} component={LoginPageWrapped}/>
      </Switch>
    );
  }
}

const LandingPageWrapped = scrollOnMount(LandingPage);
const LoginPageWrapped = scrollOnMount(LoginPage);

let moduleToExport = Routes;
if (isDevEnv) {
  moduleToExport = hot(module)(Routes);
}
export default moduleToExport;
