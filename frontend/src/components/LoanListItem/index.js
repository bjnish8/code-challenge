import React, {useState} from 'react'
import './styles.css'
import {CloseIcon, InfoIcon, MailIcon, AddressIcon} from "../../resources/icons"

const LoanListItem = ({loan}) => {
    const [chosenLoan, setChosenLoan] = useState()
    const {first_name, last_name, loan_number, state, id,address, city, zip, email} = loan

    const handleDetailClick = (id) => {
        // Toggle loan details if detail button clicked.
        if (chosenLoan){
            setChosenLoan(null)
        } else {
            setChosenLoan(id)
        }
    }

    return (
        <React.Fragment>
                <li className="loan-item">
                    <div className="loan-info">
                        <p> {loan_number} </p> 
                        <p> {`${last_name} ${first_name}, ${state}`} </p>
                        <button className={`detail-btn`} onClick={() => handleDetailClick(id)} >
                            {chosenLoan===id?<CloseIcon/>:<InfoIcon/>}
                        </button>
                    </div>
                    {chosenLoan === id && <div className="loan-details"> 
                        <p><AddressIcon /> {address}, {city}, {zip}</p>
                        <p> <MailIcon /> {email} </p>
                    </div>}
                </li>
        </React.Fragment>
    )
}

export default LoanListItem