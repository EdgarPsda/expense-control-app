import React from 'react'
import NewBudget from './NewBudget'

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
    return (
        <header>
            <h1>Expenses Planner</h1>
            {isValidBudget ? (

                <p>Budget Control</p>
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