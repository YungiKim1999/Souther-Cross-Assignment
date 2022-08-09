import React from "react";
import MemberSearchResultsRoute from "./MemberSearchResultsRoute/MemberSearchResultsRoute";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MemberSearchRoute from "./MemberSearchRoute/MemberSearchRoute";
import MenuRoute from "./MenuRoute/MenuRoute";
import { RecoilRoot } from 'recoil';

export default function RootRouter() {
  return (
    <RecoilRoot>
    <Router>
      <Switch>
        <Route exact path='/'>
          <MenuRoute/>
        </Route>
        <Route path='/search'>
          <MemberSearchRoute/>
        </Route>
        <Route path='/results'>
          <MemberSearchResultsRoute/>
        </Route>
      </Switch>
    </Router>
    </RecoilRoot>
  )
}
