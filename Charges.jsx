import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, FormControl} from 'react-bootstrap';
import {  Nav, NavLink } from 'react-bootstrap';
import UpdateCharge from './UpdateCharges'
import axios from 'axios';
import './charges.css'
import AddCharges from './AddCharges';
import ChargeDetails from './ChargeDetails'
function Charges(){
  function submitHandler(event){
    event.preventDefault();
    let val = document.getElementById('d').value;
    const config = {
      headers: {
        "content-type": String,
      },
    };
    axios({
      method: 'GET',
      url: `http://localhost:8080/CustomizePlan/charges/charge/${val}`
  }).then(response => {
        console.log(response);
        let obj=JSON.stringify(response.data);
        document.write(obj);
      })
      .catch((error) => {
        console.log(error);
      });
    
}
function submitHandle(event){
  event.preventDefault();
  let val = document.getElementById('dx').value;
  const config = {
    headers: {
      "content-type": String,
    },
  };
  axios({
    method: 'DELETE',
    url: `http://localhost:8080/CustomizePlan/charges/${val}`
}).then(response => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  
}
    return(
      <Router>
                 <div className="middle">
      <div className="text-center middle  bg-primary pb-2">
        <h1 className="text-light user"> Welcome to Customizer</h1>
      </div> 
      </div>  
      <Form inline>
      <FormControl type="text" placeholder="Search" id="d" className="mr-sm-2" />
      <Button variant="outline-success" onClick={submitHandler}>Search</Button>
    </Form>
    <br></br>
    <Form inline>
      <FormControl type="text" placeholder="Search" id="dx" className="mr-5-sm-2" />
      <Button variant="outline-danger" onClick={submitHandle}>Delete</Button>
    </Form>
       <div>
    <h5><Nav.Link href="/charges/AddCharges">click here to Add Charges</Nav.Link></h5>
      <Route path="/charges/AddCharges" component= {AddCharges} />
<h5><Nav.Link href="/charges/UpdateCharges">click here to Update Charges</Nav.Link></h5>
      <Route path="/charges/UpdateCharges" component= {UpdateCharge} />
      <br></br><br></br>
</div>
<div><ChargeDetails/></div>
</Router>   )
            }
export default Charges;