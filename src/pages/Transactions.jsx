import DataTable from "../components/DataTable/DataTable";

const config = [
    {key: 'id', label: 'ID', render: (row) => <strong>{row.id}</strong>},
    {key: 'date', label: 'Date', render: (row) => <>{row.date}</>},
    {key: 'customerId', label: 'Customer', render: (row, option) => {
            const customer = option.find(c => c.id === row.customerId);
            return <>{`${customer.firstName} ${customer.lastName}`}</>
        }},
    {key: 'product', label: 'Product', render: (row) => <>{row.product}</>},
    {key: 'price', label: 'Price', render: (row) => <>${row.price}</>},
    {key: 'quantity', label: 'Quantity', render: (row) => <>{row.quantity}</>},
    {key: 'total', label: 'Total', render: (row) => <strong>${row.total}</strong>},
]

const Transactions = ({transactions, customers}) => {
    if(transactions.length === 0 || customers.length === 0) return 'Loading...'


    return (
        <div>
            <h1>Transactions</h1>
            <DataTable data={transactions} config={config} option={customers}/>
        </div>
    );
};

export default Transactions;
