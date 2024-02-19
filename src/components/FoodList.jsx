import { useEffect, useState } from 'react'
import {fetchMeals } from '../http'


export default function FoodList() {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        async function deriveMeals(){
            try{
               const meals = await fetchMeals();
               setMeals(meals)
            }catch(error) {
                console.log(error);
            }
        }

        deriveMeals()
    }, []);

    console.log(meals);


    return <div className="w-3/4 m-auto grid grid-cols-3 gap-2">
        {meals.map(meal => {
            return  <div key={meal.id} className='text-center	bg-zinc-900 rounded-lg	overflow-hidden'>
            <img className="w-full object-cover" src={`http://localhost:3000/${meal.image}`} />
            <div className='py-2 px-1'>
                <h2 className='my-2 font-bold'>{meal.name}</h2>
                <h3 className='my-2 rounded bg-gray-800 m-auto w-20 text-yellow-600 font-semibold'>${meal.price}</h3>
                <p className='text-sm h-20' >{meal.description}</p>
                <button className='my-2 p-1 w-32 font-medium text-sm text-black rounded bg-yellow-500'>Add Cart</button>
            </div>
        </div>
        })}
       
    </div>
}