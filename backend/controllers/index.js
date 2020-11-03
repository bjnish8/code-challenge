const service = require('../service')
var createError = require("http-errors");

const SearchController = (req, res, next) => {
    try{
        const result = service.search(req.query.string || "")
        res.status(200).send({result: result})
    }
    catch(err){
        next(err)
    }
}

const getLoanById = (req, res, next) => {
    const loanId = req.params.id
    const result = service.findLoanById(loanId)
    if (result.length>0){
        res.status(200).json({result: result})
    } else {
        next(createError(404,  `Loan with id ${loanId} Not Found`))
    }
}

module.exports = {
    SearchController, 
    getLoanById
}