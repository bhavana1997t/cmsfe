import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


class ChargeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chargeData: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/CustomizePlan/charges"
        }).then((response) => {
            console.log(response.data);
            this.setState({ chargeData: response.data.data });
        });
    }
    render() {
        return (
            <>
                <Table striped bordered hover variant="light" className="m-0">
                    <thead>
                        <tr className="bg-dark text-light">
                            <th>charge Id</th>
                            <th>charge Description</th>
                            <th>charge Type</th>
                            <th>Strategy Name </th>
                            <th>Strategy Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.chargeData.map((detail) =>(
                                <tr>
                                    <td>{detail.chargeId}</td>
                                    <td>{detail.chargeDescription}</td>
                                    <td>{detail.chargeType}</td>
                                    <td>{detail.strategyName}</td>
                                    <td>{detail.strategyCost}</td>
                                    <td className="text-center"></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </>
        );
    }
}
export default ChargeDetails;