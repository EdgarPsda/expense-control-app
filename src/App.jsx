import { useState, useEffect } from 'react'
import Header from './components/Header'
import newExpenseIcon from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import { generate_id } from './helpers';
import ExpensesList from './components/ExpensesList';

function App() {

  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animModal, setAnimModal] = useState(false);
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')) : []
  );
  const [expenseEdit, setExpenseEdit] = useState({});

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimModal(true);
      }, 500);

    }
  }, [expenseEdit])


  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0);
  }, [budget])


  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
  }, [expenses])


  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, [])

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
      setExpenseEdit({});
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

  const deleteExpense = id => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
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
              deleteExpense={deleteExpense}
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
          setExpenseEdit={setExpenseEdit}
        ></Modal>
      )}
    </div>
  )
}

export default App
