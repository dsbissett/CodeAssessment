import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import { AddData } from "./components/AddData";
// import CustomersGrid from "./components/CustomersGrid";
import "./custom.css";
import { ViewCustomers } from "./components/ViewCustomers";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/fetch-data" component={FetchData} />
        <Route path="/add-data" component={AddData} />
        {/* <Route exact path="/customers-grid" element={<CustomersGrid/>} /> */}
        <Route path="/view-customers" component={ViewCustomers} />
      </Layout>
    );
  }
}
