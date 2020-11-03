import React, {useState, useEffect} from 'react'
import './styles.css'
import { useDispatch } from 'react-redux';
import APIUtil from '../../utils/API'

const Search = () => {
    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    // UseEffect to fetch data when query param dependency changes.
    useEffect(() => {
        const getLoans = async () => {
          try{
            setLoading(true)
            const {data} = await APIUtil.getLoans(query)
            dispatch({type:'LOAN_TABLE_FETCH_SUCCESS', payload:data.result})
            setLoading(false)
          }
          catch(err) {
            console.log("Error: ", err)
            dispatch({type:'LOAD_TABLE_FETCH_FAILURE'})
            setLoading(false)
          }
        }
        getLoans()
      }, [query, dispatch])
    return (
        <div className="search-box">
            <input  value={query} 
                    type="text" 
                    placeholder="Search by loan number, name or city" 
                    onChange={(e) => setQuery(e.target.value)} />
            {/* Spinner to denote the api call for search is in progress. */}
            {loading && <div className="spinner" />}
        </div>
    )
}
  
export default Search;