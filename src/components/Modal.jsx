import closeBtn from '../img/cerrar.svg'
import { useState } from 'react';
import Message from './Message';

const Modal = ({ setModal, animModal, setAnimModal, saveExpense }) => {

    const [expenseName, setExpenseName] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const hideModal = () => {
        setAnimModal(false);

        setTimeout(() => {
            setModal(false);

        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if([expenseName, amount, category].includes('')){
            setMessage('All field are required.');

            setTimeout(() => {
               setMessage(''); 
            }, 3000);

            return;
        }

        saveExpense({expenseName, amount, category});
    }

    return (
        <div className="modal">
            <div className='cerrar-modal'>
                <img
                    src={closeBtn}
                    alt="close modal"
                    onClick={hideModal}
                />
            </div>

            <form 
                className={`formulario ${animModal ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit} 
            >
                <legend>New Expense</legend>

                {message && (<Message tipo='error'>{message}</Message>)}

                <div className='campo'>
                    <label htmlFor="expenseName">Expense Name</label> 
                    <input
                        id='expenseName' 
                        type="text" 
                        placeholder='Add the expense name'     
                        value={expenseName}
                        onChange={e => setExpenseName(e.target.value)}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="amount">Amount</label> 
                    <input
                        id='amount' 
                        type="number" 
                        placeholder='Add the expense amount'     
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="category">Expense Category</label> 
                    <select 
                        id="category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                            <option value="">-- Select -- </option>
                            <option value="savings">Savings</option>
                            <option value="food">Food</option>
                            <option value="home">Home</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="healt">Health</option>
                            <option value="subscriptions">Subscriptions</option>
                            <option value="other">Other</option>
                    </select>
                </div>

                <input type="submit" value="Add Expense" />
            </form>
        </div>
    )
}

export default Modal