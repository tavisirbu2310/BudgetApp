import React from "react";
import classes from './BudgetItems.module.css';
import './BudgetItems.module.css';
import BudgetIncomeItem from "./BudgetItem/BudgetIncomeItem";
import BudgetExpenseItem from "./BudgetItem/BudgetExpenseItem";


function BudgetItems(props) {
    let incomeTotal = props.incomes.reduce((prev, {value}) => prev + Number(value),0);
    return (
        <div className={classes.Bottom}>
            <div className={classes.Add}>
                <div className={classes.AddContainer}>
                    <select
                        onChange={props.signReader}
                        defaultValue='inc'
                        className={props.sign==='inc'?classes.AddTypeIncome:classes.AddTypeExpense}>
                        <option value="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input
                        onChange={props.itemDescription}
                        type="text"
                        value={props.description}
                        className={props.sign==='inc'?classes.AddDescriptionIncome:classes.AddDescriptionExpense}
                        placeholder="Add description"/>
                    <input
                        onChange={props.itemValue}
                        value={props.value}
                        type="number"
                        className={props.sign==='inc'?classes.AddValueIncome:classes.AddValueExpense}
                        placeholder="Value"/>
                    <button
                        onClick={props.addItem}
                        className={props.sign==='inc'?classes.AddButtonIncome:classes.AddButtonExpense}
                    ><i className="ion-ios-checkmark-outline"></i></button>
                </div>
            </div>

            <div className={classes.Container}>

                <div className={classes.Income}>
                    <h2 className={classes.IncomeTitle}>Incomes</h2>

                    {props.incomes.map((element,index) => {
                        return <BudgetIncomeItem
                            delete={()=>props.deleteIncome(index)}
                            key={index}
                            sign={props.sign}
                            description={element.description}
                            value={element.value}/>
                    })}

                </div>


                <div className={classes.Expenses}>
                    <h2 className={classes.ExpensesTitle}>Expenses</h2>

                    {props.expenses.map((element,index) => {
                        return <BudgetExpenseItem
                            delete={()=>props.deleteExpense(index)}
                            income={incomeTotal}
                            key={index}
                            sign={props.sign}
                            description={element.description}
                            value={element.value}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default BudgetItems;