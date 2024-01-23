import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget, expenses }) => {
    return (
        <header>
            <h1>Expenses Planner</h1>
            {isValidBudget ? (

                <BudgetControl
                    budget={budget}
                    expenses={expenses}
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