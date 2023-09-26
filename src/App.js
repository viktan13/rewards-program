import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [transactions, setTransactions] = useState([]);
    const [customers, setCustomers] = useState([])

    useEffect(() => {
       axios.get('http://localhost:8000/transactions?_sort=date&_order=asc')
           .then(response => {
               setTransactions(response?.data)
           });
       axios.get('http://localhost:8000/customers')
           .then(response => {
               setCustomers(response.data)
           })
    }, []);

  return (
    <div className="App">
      <AppRouter transactions={transactions} customers={customers}/>
    </div>
  );
}

export default App;
