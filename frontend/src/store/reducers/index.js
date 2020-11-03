const initialState = {
    loanTableData: [],
    loanTableError: null,
}

const updateObj = (state, newState) => {
    return {...state, ...newState}
}

const populateLoanTable = (state, action) => {
    return updateObj(state, {loanTableData: action.payload, loanTableError:null})
}

const onLoanFetchFailure = (state) => {
    return updateObj(state, {loanTableError:"An error occurred. Could not fetch data"})
}

const BaseReducer = (state=initialState, action) => {
    switch(action.type){
        case 'LOAN_TABLE_FETCH_SUCCESS':
            return populateLoanTable(state, action)
        case 'LOAD_TABLE_FETCH_FAILURE':
            return onLoanFetchFailure(state)
        default:
            return state
    }
}

export default BaseReducer;