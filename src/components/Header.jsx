import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget,
    expenses,
    setExpenses
}) => {
    return (
        <header>
            <h1>Expenses Planner</h1>
            {isValidBudget ? (

                <BudgetControl
                    budget={budget}
                    expenses={expenses}
                    setExpenses={setExpenses}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                ></BudgetControl>

            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                ></NewBudget>
            )}
        </header>
    )
}

export default Header