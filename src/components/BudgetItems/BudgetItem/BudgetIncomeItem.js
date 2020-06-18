import React from "react";
import classes from './BudgetIncomeItem.module.css';
import NumberFormat from "react-number-format";

function BudgetIncomeItem(props) {
    let item;
    item = <div className={classes.Item} id="income-0">
        <div className={classes.ItemDescription}>{props.description}</div>
        <div className={classes.Right}>
            <div className={classes.ItemValue}>
                + <NumberFormat value={Math.abs(Number(props.value)).toFixed(2)} thousandSeparator={true} displayType={"text"}/></div>
            <div>
                <button onClick={props.delete} className={classes.ItemDeleteButton}><i className="ion-ios-close-outline"></i>
                </button>
            </div>
        </div>
    </div>
    return <React.Fragment>{item}</React.Fragment>;

}

export default BudgetIncomeItem;