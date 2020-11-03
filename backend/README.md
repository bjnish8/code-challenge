## An server to store the list of selected countries.
A server to return loan records by id. Also, can search for 
records by first_name, last_name, loan_number, city and 
return the data.

### Instructions to Run
```
yarn install
```
```
yarn start
```
By default runs on 8000 port.

### Libraries Used
- express  
Express is used to create an API and provide endpoints for various services.  
- body-parser  
Body parser is used to parse the JSON body of the requests.  
- http-errors  
Used to simplify the process of returning error responses  
- cors  
To overcome cors issue if present.  

### Endpoints:

GET http://localhost:8000/data/?string=foo
- Search the database for loan records by string query.

GET http://localhost:8000/loan/:id
- Get details about a specific loan by loan_number. 

### Errors:

| Error        | Code           | Reason  |
| ------------- |:-------------:| -----:|
| Internal Server | 500 | General errors in the server |
| Not Found       | 404    | Incorrect url pointing to a non-existing resource |

### Future Works
- Add a database
