import cls from './DataTable.module.css'

const Table = ({data, config, option}) => {
    return (
        <table className={cls.table} border='1' width='50%'>
            <thead>
            <tr>
                {config.map(el => (
                    <th key={el.key}>
                        {el.label}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map(el => (
                <tr key={el.id}>
                    {config.map(conf => (
                        <td key={conf.key}>
                            {conf.key === 'name' ? el.name : conf.render(el, option)}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
