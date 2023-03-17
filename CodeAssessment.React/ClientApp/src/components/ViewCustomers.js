import { Component } from "react";
import CustomerPagedGrid from "./CustomerPagedGrid";

export class ViewCustomers extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return <CustomerPagedGrid />
    }
}