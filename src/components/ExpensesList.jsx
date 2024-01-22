import Expense from "./Expense"

const ExpensesList = ({ expenses }) => {
    return (
        <div className="listado-gastos contenedor">
            <h2>{expenses.length ? 'Expenses' : 'No Expenses'}</h2>
            {expenses.map(expense => (
                <Expense
                    key={expense.id}
                    expense={expense}
                ></Expense>
            ))}
        </div>
    )
}

export default ExpensesList