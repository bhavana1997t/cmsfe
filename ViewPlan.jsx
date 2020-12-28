import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';


class ViewPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planData: []
        }
    }
        componentDidMount(){
            this.setState({planData:JSON.parse(localStorage.getItem("plan"))});
            console.log(this.state);
        }

        render(){
            return (
                <>
                    <Table striped bordered hover variant="light" className="m-0">
                        <thead>
                            <tr className="bg-dark text-light">
                                <th>plan Id</th>
                                <th>plan Name</th>
                                <th>plan Description</th>
                                <th>Start Date </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                               
                                    <tr>
                                        <td>{this.state.planId}</td>
                                        <td>{this.state.planName}</td>
                                        <td>{this.state.planDescription}</td>
                                        <td>{this.state.startDate}</td>
                                        <td className="text-center"></td>
                                    </tr>
                             
                            }
    
                        </tbody>
                    </Table>
                </>
            );
        }
    
}
export default ViewPlan;