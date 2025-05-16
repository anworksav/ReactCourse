import React  from "react";

export default function App() {
    let [count, setCount] = React.useState(0)

    function plusClick () {
        setCount(prevCount => prevCount + 1)
    }

    function minusClick () {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <main>
            <h1 className="title">Is state important to know?</h1>
            <div className="container">
                <button className="minus"  aria-label="Decrease" onClick={minusClick}>-</button>
                <h2 className="count">{count}</h2>
                <button className="plus"  aria-label="Increase" onClick={plusClick}>+</button>
            </div>
        </main>
    )
}


// export default function Main() {
//     const ingredients = ["Chicken breasts", "Most of the main spices",
//         "Olive oil",  "Heavy cream", "Chicken broth", "	Parmesan cheese", 
//         "Spinach"]

//     const ingredientsListItems = ingredients.map(ingredient => {
//         return (<li key={ingredient}>{ingredient}</li>)
//     })

//     function handleSubmit(event) {
//         event.preventDefault()
//         const formData = new FormData(event.currentTarget)
//         const newIngredient = formData.get("ingredient") //input name
//         console.log(newIngredient)
//         ingredients.push(newIngredient)
//         console.log(ingredients)
//     }


//     return (
//         <main>
//             <form className="add-ingridient-form"
//                 onSubmit={handleSubmit}>
//                 <input 
//                     type="text"
//                     placeholder="e.g. oregano"
//                     aria-label="Add ingridient"
//                     name="ingredient"
//                 />
//                 <button>+ Add ingridient</button>
//             </form>
//             <h1 className="ingridients-header">Ingredients on hand:</h1>
//             <ul className="ingridients-list">
//                 {ingredientsListItems}
//             </ul>
//         </main>
//     )
// }