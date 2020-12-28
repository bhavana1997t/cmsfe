import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./charges.css";


function UpdateCharges() {

    function submitHandler(event){
        event.preventDefault();
        let object = {
        chargeId:document.getElementById('cid').value,
          strategyCost:document.getElementById('scost').value,
          strategyName:document.getElementById('sname').value,
          chargeDescription:document.getElementById('cdesc').value,
          chargeType:document.getElementById('ctype').value,
            validityInDays:document.getElementById('vdays').value,
            plan:{
                planId:document.getElementById('pid').value
            }
            
        };
        let json = JSON.stringify(object);
        console.log(json);
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        axios
          .put("  http://localhost:8080/CustomizePlan/charges", json, config)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
          let ele=document.getElementById('co');
          ele.innerHTML="charges Added Successfully";
          ele.style.textAlign="center";
          ele.style.marginBottom="30px"
    }
  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5 coform mb-5" id="co">
      <form name="myForm" onSubmit={submitHandler}>
        <h3 className="mb-5 text-muted text-center mt-5">Update charge</h3>

        <div className="form-group">
          <label>Charge Id </label>
          <input
            type="text"
            id="cid"
            className="form-control"
            name="chargeId"
            placeholder="Enter charge Id"
          />
        </div> 

        <div className="form-group">
          <label>strategyCost </label>
          <input
            type="text"
            id="scost"
            className="form-control"
            name="strategyCost"
            placeholder="Enter strategy Cost"
          />
        </div>

        <div className="form-group">
          <label>charge Description</label>
          <input
            type="text"
            id="cdesc"
            name="productdescription"
            className="form-control"
            placeholder="Enter charge description"
          />
        </div>

        <div className="form-group">
          <label>Strategy Name</label>
          <input
            type="text"
            id="sname"
            name="straname"
            className="form-control"
            placeholder="Enter strategy name"
          />
        </div>

        <div className="form-group">
          <label>charge Type</label>
          <input
            type="text"
            id="ctype"
            className="form-control"
            name="chargeType"
            placeholder="Enter charge type"
          />
        </div>

        <div className="form-group">
          <label>plan Id</label>
          <input
            type="number"
            id="pid"
            name="planId"
            className="form-control"
            placeholder="Enter plan id"
          />
        </div>

        <div className="form-group">
          <label>validity In Days</label>
          <input
            type="number"
            id="vdays"
            name="validityInDays"
            className="form-control"
            placeholder="Enter validity In Days "
          />
        </div>

      
        <div>
          <button className="btn btn-primary mt-4 subtn" type="submit">Update charge</button>
        </div>
      </form>
    </div>
  );
}
export default UpdateCharges;