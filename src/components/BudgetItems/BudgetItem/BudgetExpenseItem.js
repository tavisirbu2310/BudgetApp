import React from "react";
import classes from './BudgetExpenseItem.module.css';
import NumberFormat from "react-number-format";

function BudgetExpenseItem(props) {
    let item;
    let percentage = Math.round((props.value/props.income)*100);
    item = <div className={classes.Item} id="expense-0">
        <div className={classes.ItemDescription}>{props.description}</div>
        <div className={classes.Right}>
            <div className={classes.ItemValue}>
                - <NumberFormat value={Math.abs(Number(props.value)).toFixed(2)} thousandSeparator={true} displayType={"text"}/></div>
            <div className={classes.ItemPercentage}>
                {Number.isNaN(percentage) || !isFinite(percentage)?'0':percentage}%
            </div>
            <div>
                <button onClick={props.delete} className={classes.ItemDeleteButton}><i className="ion-ios-close-outline"/>
                </button>
            </div>
        </div>
    </div>
    return <React.Fragment>{item}</React.Fragment>;
}

export default BudgetExpenseItem;