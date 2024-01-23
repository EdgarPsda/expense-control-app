import { useState, useEffect } from 'react'
import Header from './components/Header'
import newExpenseIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import { generate_id } from './helpers';
import ExpensesList from './components/ExpensesList';

function App() {

  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animModal, setAnimModal] = useState(false);
  const [expenses, setExpenses] = useState([]);
  const [expenseEdit, setExpenseEdit] = useState({});

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimModal(true);
      }, 500);

    }
  }, [expenseEdit])

  const handleNewExpense = () => {
    setModal(true);
    setExpenseEdit({});

    setTimeout(() => {
      setAnimModal(true);
    }, 500);
  }

  const saveExpense = expense => {

    if (expense.id) {
      //Edit expense
      const updatedExpenses = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState)
      setExpenses(updatedExpenses);
    } else {
      //New Expense
      expense.id = generate_id();
      expense.date = Date.now();
      setExpenses([...expenses, expense]);
    }


    setAnimModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        expenses={expenses}
      ></Header>

      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
            ></ExpensesList>
          </main>
          <div className='nuevo-gasto'>
            <img
              src={newExpenseIcon}
              alt="new expense icon"
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animModal={animModal}
          setAnimModal={setAnimModal}
          saveExpense={saveExpense}
          expenseEdit={expenseEdit}
        ></Modal>
      )}
    </div>
  )
}

export default App
