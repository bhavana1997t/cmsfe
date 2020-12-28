import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import CompanyHome from './company/Company';
import products from './Products/Product';
import plan from './Plan/Plan';
import bundel from './Bundel/Bundel';
import charges from './Charges/Charges';
import HomePage from './HomePage';
import ViewPlan from './Products/ViewPlan';
class  RenderComponent extends Component{
   
    
    render() {

        return (
            <div>
            <Router>
              <Route exact path="/" component={HomePage}/>
                <Route path="/company" component={CompanyHome} />
                <Route path="/products" component={products} />
                <Route path="/Plans" component={plan} />
                <Route path='/charges' component={charges}/>
                <Route path='/bundel' component={bundel}></Route>
                <Route path='/plan' component={ViewPlan}></Route>
            </Router>
            </div>
        );
    }
 }

 export default RenderComponent;