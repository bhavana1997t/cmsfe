import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import'./home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';
import Companies from './company/Company';
import Plans from './Plan/Plan';
import Products from './Products/Product';
import Charges from './Charges/Charges';
import Bundel from './Bundel/Bundel';


function HomePage(){
    return(
    <Router>
       <div className="middle">
          <div className="text-center bg-primary pb-2">
            <h1 className="text-light user"> Welcome to Customizer</h1>
          </div>
          <div className="text-center  bg-ligh pt-3 pb-4">
          <Button variant="outline-primary  mr-5"><Nav.Link href="/company">Company</Nav.Link></Button>
          <Route path="/company" component= {Companies} />
          <Button variant="outline-primary mr-5"><Nav.Link href="/products">Product</Nav.Link></Button>
      <Route path="/products" component= {Products} />
      <Button variant="outline-primary mr-5"><Nav.Link href="/Plans">Plan</Nav.Link></Button>
      <Route path="/Plans" component= {Plans} />
      <Button variant="outline-primary mr-5"><Nav.Link href="/bundel">Bundel</Nav.Link></Button>
      <Route path="/bundel" component= {Bundel} /> 
      <Button variant="outline-primary "><Nav.Link href="/charges">Charges</Nav.Link></Button>
      <Route path="/charges" component= {Charges} />
          </div>

        </div>  
</Router>   )
            }
export default HomePage;