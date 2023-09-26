import {Route, Routes} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../pages/Home";
import Transactions from "../../pages/Transactions";
import Rewards from "../../pages/Rewards";


const AppRouter = (props) => {
    const {
        transactions,
        customers
    } = props

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='transactions' element={<Transactions transactions={transactions} customers={customers}/>}/>
                <Route path='rewards' element={<Rewards/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;
