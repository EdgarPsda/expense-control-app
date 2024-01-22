
const BudgetControl = ({ budget }) => {

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
                    <span>Available: </span> {budgetFormat(0)}
                </p>
                <p>
                    <span>Spent: </span> {budgetFormat(0)}
                </p>
            </div>
        </div>
    )

}

export default BudgetControl