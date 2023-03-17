import { Component } from "react";
import CustomersGrid from "./CustomersGrid";

export class ViewCustomers extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <CustomersGrid />
    }
}