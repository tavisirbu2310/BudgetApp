import React, { useState} from "react";
import classes from './BudgetPage.module.css';
import BudgetSummary from "../../components/BudgetSummary/BudgetSummary";
import BudgetItems from "../../components/BudgetItems/BudgetItems";

const BudgetPage = () => {

    let [incomesState,setIncomesState] = useState([]);
    let [expensesState, setExpensesState] = useState([]);
    let [sign,setSign]=useState('inc');
    let [description,setDescription] =useState('');
    let [value, setValue] = useState(0);

    const signReader = (event) => {
        setSign(event.target.value);
    }

    const addItemDescription = (event) => {
        setDescription(event.target.value);
    }

    const addItemValue = (event) => {
        setValue(event.target.value);
    }

    const addItemHandler = () => {
        let obj = {
            description: description,
            value: value
        }
        if (sign === 'inc' && description && value) {
            setIncomesState(prevState => [...prevState,obj]);
            setDescription('');
            setValue(0);
        } else if (sign === 'exp' && description && value) {
            setExpensesState(prevState => [...prevState,obj]);
            setDescription('');
            setValue(0);
        }
    }

    const deleteIncome = (id) => {
        setIncomesState(prevState => prevState.filter((el,index)=>index!==id));
    }

    const deleteExpense = (id) => {
        setExpensesState(prevState => prevState.filter((el,index)=>index!==id));
    }

    return (
        <div className={classes.Wrapper}>
            <BudgetSummary
                incomes={incomesState}
                expenses={expensesState}
            />
            <BudgetItems
                sign={sign}
                signReader={signReader}
                itemDescription={addItemDescription}
                itemValue={addItemValue}
                addItem={addItemHandler}
                deleteIncome={deleteIncome}
                deleteExpense={deleteExpense}
                incomes={incomesState}
                expenses={expensesState}
                description={description}
                value={value}
            />
        </div>
    );
};

export default BudgetPage;