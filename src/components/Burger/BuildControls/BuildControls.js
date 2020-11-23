import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {
    const controls = [
        {label:'Salad', type:'salad'},
        {label:'Bacon', type:'bacon'},
        {label:'Cheese', type:'cheese'},
        {label:'Meat', type:'meat'}
    ]
    return (
        <div className={classes.BuildControls}>
            <p>current price: <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map(ctl => {
                    return <BuildControl 
                        key={ctl.label} 
                        label={ctl.label}
                        added={() => props.ingredientAdded(ctl.type)}
                        removed={() => props.ingredientRemoved(ctl.type)}
                        disabled={props.disabled[ctl.type]}/>
                })
            }
            <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls;