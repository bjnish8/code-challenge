const Fuse = require('fuse.js')
const list = require("../data/sample.json");

/*
   Fuzzy search for loan records by
   loan_number, first_name, last_name, city.
*/
const search = (pattern) => {
    const options = {
        isCaseSensitive: false,
        location: 0,
        threshold: 0.2,
        distance: 0,
        keys: [
            "loan_number",
            "first_name",
            "last_name",
            "city"
        ]};
        const fuse = new Fuse(list, options);
        return fuse.search(pattern)
}

const findLoanById = (loanId) => {
    return list.filter(({loan_number}) => loan_number===loanId)
}

module.exports = {
    search,
    findLoanById
}   