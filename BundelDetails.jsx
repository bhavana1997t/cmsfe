import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';


class BundelDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bundelData: []
        }
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:8080/CustomizePlan/bundels"
        }).then((response) => {
            console.log(response.data);
            this.setState({ bundelData: response.data.data });
        });
    }
    render() {
        return (
            <>
                <Table striped bordered hover variant="light" className="m-0">
                    <thead>
                        <tr className="bg-dark text-light">
                            <th>bundel Id</th>
                            <th>bundel Name</th>
                            <th>bundel Description</th>
                            {/* <th>start Date</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.bundelData.map((detail) =>(
                                <tr>
                                    <td>{detail.bundelId}</td>
                                    <td>{detail.bundelName}</td>
                                    <td>{detail.bundelDescription}</td>
                                    {/* <td>{detail.startDate}</td> */}
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
export default BundelDetails;