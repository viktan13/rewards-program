import './App.css';
import AppRouter from "./components/AppRouter/AppRouter";
import {useGetData} from "./shared/lib/hooks/useGetData";

function App() {
    const {transactions, customers} = useGetData();

  return (
    <div className="App">
      <AppRouter transactions={transactions} customers={customers}/>
    </div>
  );
}

export default App;
