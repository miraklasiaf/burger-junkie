import React from 'react'

export const OrderSummary = ({ingredients, price}) => {
    const ingredientSummary = Object.keys(ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span className="capitalize">{igKey}</span>: {ingredients[igKey]}
                </li>
            )
        })

    return (
        <div className='px-5 py-3 text-blue-100'>
            <h2 className="font-bold mb-2">Your Order</h2>
            <p className="mb-2">A delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p className="font-bold mt-2">Total Price: Rp {price} </p>
            <div className="text-center mt-5">
                <p>Continue to Checkout?</p>
                <button>CANCEL</button>
                <button>CONTINUE</button>
            </div>
        </div>
    )
}
