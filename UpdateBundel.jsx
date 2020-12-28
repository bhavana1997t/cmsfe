import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import "./bundel.css";


function UpdateBundel() {

    function submitHandler(event){
        event.preventDefault();
        let object = {
            bundelId: document.getElementById('bid').value,
            bundelName:document.getElementById('bname').value,
            bundelDescription:document.getElementById('bdesc').value
            
        };
        let json = JSON.stringify(object);
        console.log(json);
        const config = {
          headers: {
            "content-type": "application/json",
          },
        };
        axios
          .put("http://localhost:8080/CustomizePlan/bundels", json, config)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
          let ele=document.getElementById('co');
          ele.innerHTML="bundel Added Successfully";
          ele.style.textAlign="center";
          ele.style.marginBottom="30px"
    }
  return (
    <div className="col-md-6 offset-md-3 card card-body mt-5 coform mb-5" id="co">
      <form name="myForm" onSubmit={submitHandler}>
        <h3 className="mb-5 text-muted text-center mt-5">Update Bundel</h3>

        <div className="form-group">
          <label>Bundel Id</label>
          <input
            type="text"
            id="bid"
            className="form-control"
            name="BundelId"
            placeholder="Enter Bundel Id "
          />
        </div>

        <div className="form-group">
          <label>Bundel Name</label>
          <input
            type="text"
            id="bname"
            className="form-control"
            name="BundelName"
            placeholder="Enter Bundel Name "
          />
        </div>

        <div className="form-group">
          <label>Bundel Description</label>
          <input
            type="text"
            id="bdesc"
            name="productdescription"
            className="form-control"
            placeholder="Enter plan description"
          />
        </div>
        <div>
          <button className="btn btn-primary mt-4 subtn" type="submit">Add Bundel</button>
        </div>
      </form>
    </div>
  );
}
export default UpdateBundel;