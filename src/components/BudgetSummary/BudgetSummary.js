import React from "react";
import classes from './BudgetSummary.module.css';
import NumberFormat from "react-number-format";

function BudgetSummary(props) {
    let month = new Date().getMonth();
    let monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let incomeTotal = props.incomes.reduce((prev, {value}) => prev + Math.abs(Number(value)),0);
    let expenseTotal = props.expenses.reduce((prev,{value})=> prev + Math.abs(Number(value)),0);
    let percentage = Math.round((expenseTotal/incomeTotal *100));
    return (
        <div className={classes.Top}>
            <div className={classes.Budget}>
                <div className={classes.BudgetTitle}>
                    Available Budget in <span className={classes.BudgetTitleMonth}>{monthList[month]}</span>:
                </div>

                <div className={classes.BudgetValue}>{incomeTotal-expenseTotal>=0?'+':'-'}
                <NumberFormat value={Math.abs(incomeTotal-expenseTotal).toFixed(2)} displayType={"text"} thousandSeparator={true}/></div>

                <div className={classes.BudgetIncome}>
                    <div className={classes.BudgetIncomeText}>Income</div>
                    <div className={classes.Right}>
                        <div className={classes.BudgetIncomeValue}>
                            +<NumberFormat value={incomeTotal.toFixed(2)} displayType={"text"} thousandSeparator={true}/> </div>
                        <div className={classes.BudgetIncomePercentage}>&nbsp;</div>
                    </div>
                </div>

                <div className={classes.BudgetExpenses}>
                    <div className={classes.BudgetExpensesText}>Expense</div>
                    <div className={classes.Right}>
                        <div className={classes.BudgetExpensesValue}>
                            -<NumberFormat value={expenseTotal.toFixed(2)} displayType={"text"} thousandSeparator={true}/></div>
                        <div className={classes.BudgetExpensesPercentage}>{Number.isNaN(percentage) || !isFinite(percentage)?0:percentage}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BudgetSummary;