import Expense from "./Expense"

const ExpensesList = ({
    expenses,
    setExpenseEdit,
    deleteExpense,
    filter,
    expensesFiltered
}) => {
    return (
        <div className="listado-gastos contenedor">

            {filter ? (
                <>
                    <h2>{expensesFiltered.length ? 'Expenses' : 'No Expenses'}</h2>
                    {expensesFiltered.map(expense => (
                        <Expense
                            key={expense.id}
                            expense={expense}
                            setExpenseEdit={setExpenseEdit}
                            deleteExpense={deleteExpense}
                        ></Expense>
                    ))}
                </>
            ) : (
                <>
                    <h2>{expenses.length ? 'Expenses' : 'No Expenses'}</h2>
                    {expenses.map(expense => (
                        <Expense
                            key={expense.id}
                            expense={expense}
                            setExpenseEdit={setExpenseEdit}
                            deleteExpense={deleteExpense}
                        ></Expense>
                    ))}
                </>
            )}

        </div>
    )
}

export default ExpensesList