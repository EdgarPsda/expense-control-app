import { dateFormat } from "../helpers";
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css";
import SavingsIcon from '../img/icono_ahorro.svg';
import HomeIcon from '../img/icono_casa.svg';
import FoodIcon from '../img/icono_comida.svg';
import OtherIcon from '../img/icono_gastos.svg';
import EnterntainmentIcon from '../img/icono_ocio.svg';
import HealthIcon from '../img/icono_salud.svg';
import SubscriptionsIcon from '../img/icono_suscripciones.svg';

const iconsCollection = {
    savings: SavingsIcon,
    food: FoodIcon,
    home: HomeIcon,
    entertainment: EnterntainmentIcon,
    healt: HealthIcon,
    subscriptions: SubscriptionsIcon,
    other: OtherIcon

}

const Expense = ({ expense, setExpenseEdit, deleteExpense }) => {

    const { category, expenseName, amount, id, date } = expense;

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setExpenseEdit(expense)}>
                Edit
            </SwipeAction>
        </LeadingActions>
    )

    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction
                onClick={() => deleteExpense(id)}
                destructive={true}
            >
                Delete
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">

                        <img
                            src={iconsCollection[category]}
                            alt="expense icon"
                        />

                        <div className="descripcion-gasto">
                            <p className="categoria">{category}</p>
                            <p className="nombre-gasto">{expenseName}</p>
                            <p className="fecha-gasto">
                                Added: {''}
                                <span>{dateFormat(date)}</span>
                            </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${amount}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Expense