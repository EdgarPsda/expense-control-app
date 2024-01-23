import { useEffect, useState } from "react";

const BudgetControl = ({ budget, expenses }) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0);
        const totalAvailable = budget - totalSpent;

        setSpent(totalSpent);
        setAvailable(totalAvailable);
    }, [expenses])

    const budgetFormat = (cant) => {
        return cant.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>Graph here</div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Budget: </span> {budgetFormat(budget)}
                </p>
                <p>
                    <span>Available: </span> {budgetFormat(available)}
                </p>
                <p>
                    <span>Spent: </span> {budgetFormat(spent)}
                </p>
            </div>
        </div>
    )

}

export default BudgetControl