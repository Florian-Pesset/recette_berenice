import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import AddRecipe from './views/AddRecipe';
import Home from './views/Home';
import PlanRecipe from './views/PlanRecipe';

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/add-recipe" component={AddRecipe} />
          <Route path="/plan-recipe" component={PlanRecipe} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
