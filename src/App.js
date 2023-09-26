import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Rewards from "./pages/Rewards";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path={'transactions'} element={<Transactions />}/>
          <Route path={'rewards'} element={<Rewards />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
