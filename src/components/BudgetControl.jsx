import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";


const BudgetControl = ({ budget, expenses }) => {

    const [available, setAvailable] = useState(0);
    const [spent, setSpent] = useState(0);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const totalSpent = expenses.reduce((total, expense) => expense.amount + total, 0);
        const totalAvailable = budget - totalSpent;

        // Calc percentage spent
        const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);

        setSpent(totalSpent);
        setAvailable(totalAvailable);
        setTimeout(() => {
            setPercentage(newPercentage);
        }, 1500);
    }, [expenses])

    const budgetFormat = (cant) => {
        return cant.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    value={percentage}
                    styles={buildStyles({
                        pathColor: '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: '#3B82F6'
                    })}
                    text={`${percentage}% Spent`}
                ></CircularProgressbar>
            </div>
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