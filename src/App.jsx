import { useState } from 'react'
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

  const handleNewExpense = () => {
    setModal(true);

    setTimeout(() => {
      setAnimModal(true);
    }, 500);
  }

  const saveExpense = expense => {
    expense.id = generate_id();
    setExpenses([...expenses, expense]);

    setAnimModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      ></Header>

      {isValidBudget && (
        <>
          <main>
            <ExpensesList
              expenses={expenses}
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
        ></Modal>
      )}
    </div>
  )
}

export default App
