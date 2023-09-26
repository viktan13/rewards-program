import DataTable from "../components/DataTable/DataTable";
import {getRewards} from "../shared/lib/helpers/getRewards";

const config = [
    {key: 'id', label: "ID", render: (row) => <>{row.id}</>},
    {key: 'customer', label: "Customer", render: (row) => <>{row.firstName} {row.lastName}</>},
    {
        key: '05', label: "May", render: (row, option) => {
            const transactions = option.filter(t => t.customerId === row.id && t.date.startsWith('05'));
            return <>{getRewards(transactions)} points</>
        }
    },
    {
        key: '06', label: "June", render: (row, option) => {
            const trans = option.filter(t => t.customerId === row.id && t.date.startsWith('06'));
            return <>{getRewards(trans)} points</>
        }
    },
    {
        key: '07', label: "July", render: (row, option) => {
            const trans = option.filter(t => t.customerId === row.id && t.date.startsWith('07'));
            return <>{getRewards(trans)} points</>
        }
    },
    {
        key: 'total', label: "Total", render: (row, option) => {
            const trans = option.filter(t => t.customerId === row.id);
            return <strong>{getRewards(trans)} points</strong>
        }
    }
]

const Rewards = ({transactions, customers}) => {
    return (
        <div>
            <h1>Rewards</h1>
            <DataTable data={customers} config={config} option={transactions}/>
        </div>
    );
};

export default Rewards;
