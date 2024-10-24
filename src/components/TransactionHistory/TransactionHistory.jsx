import css from './TransactionHistory.module.css'


const TransactionHistory = ({items}) => {
    return (

            <table>
                <thead>
                    <tr className={css.menu}>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

            <tbody className={css.items}>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </tr>
                ))}
                </tbody>
            </table>
    );
}

export default TransactionHistory