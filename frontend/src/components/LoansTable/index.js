import React from 'react'
import './styles.css'
import {AddressIcon, MailIcon} from "../../resources/icons"
import LoanListItem from '../LoanListItem'
import {connect} from 'react-redux'

/*
  When the search query returns only one item, the detailed
  view for the item is displayed with all available attributes
  for the loan.
*/
const LoanDetailView = ({loan}) => {
  const {first_name, last_name, state, address, city, zip, email, loan_number} = loan.item
  return (
    <div className="loan-details-view">
          <p className="name"> {`${last_name} ${first_name}`} </p>
          <p className="loan_num"> {loan_number} </p> 
          <p><AddressIcon /> {address}, {city}, {state}, {zip}</p>
          <p> <MailIcon /> {email} </p>
    </div>
  )
}

/*
  Params: Loan Data Array
  Returns:  A component based on the number of loans present in the data.
            A message to begin search when 0 loans
            A detailed view for the loan when only one room available.
            A list of loans with a collapsible to see details.
*/

const LoanView = ({allLoans}) => {
    if(allLoans.length===0){
        return <p className="info-text"> No data. Update search parameters </p>
    }
    else if(allLoans.length===1)
    {
      return <LoanDetailView loan={allLoans[0]} />
    }
    else{
      return <ul>
           {allLoans.map(loan => <LoanListItem key={loan.item.id} loan={loan.item} />)}
         </ul>
    }
    }

/*
  Component which displays information about the loan accordingly.
*/

const LoansTable = ({allLoans, loanError}) => {
    return (
      <div className="loan-table">
      {!loanError?
      <LoanView allLoans={allLoans} />
      :
      <div className="error-text">{loanError}</div>}
      </div>
    )
}
const mapStateToProps = state => {
  return {
      allLoans: state.loanTableData || [],
      loanError: state.loanTableError
  }
}

export default connect(mapStateToProps)(LoansTable);