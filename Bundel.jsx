import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Form, Button, InputGroup, FormControl, Jumbotron} from 'react-bootstrap';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import axios from 'axios';
import UpdateBundel from './UpdateBundel.jsx';
import './bundel.css'
import BundelDetails from './BundelDetails'
import AddBundel from './AddBundel';
function Bundel(){
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
      url: `http://localhost:8080/CustomizePlan/bundels/${val}`
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
    url: `http://localhost:8080/CustomizePlan/bundels/${val}`
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
      <Form inline >
      <FormControl type="text" placeholder="Search" id="d" className="mr-sm-2" />
      <Button variant="outline-success" onClick={submitHandler}>Search</Button>
    </Form>
    <br></br>
    <Form inline >
      <FormControl type="text" placeholder="Search" id="dx" className="mr-5-sm-2" />
      <Button variant="outline-danger" onClick={submitHandle}>Delete</Button>
    </Form>
       <div>
    <h5><Nav.Link href="/bundel/AddBundel">click here to Add Bundel</Nav.Link></h5>
      <Route path="/bundel/AddBundel" component= {AddBundel} />
<h5><Nav.Link href="/bundel/UpdateBundel">click here to Update Bundel</Nav.Link></h5>
      <Route path="/bundel/UpdateBundel" component= {UpdateBundel} />
      <br></br><br></br>
</div>
<div><BundelDetails/></div>
</Router>   )
            }
export default Bundel;