import React from "react"
import "./app.css";
import LoansTable from "./components/LoansTable"
import Search from "./components/Search"

function LoanSearchApp() {
  return (
    <div className="app-container">
      <div className="app-content">
      <Search />
      <LoansTable />
      </div>
    </div>
  );
}

export default LoanSearchApp;

