export async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals');

        if(!response.ok){
            throw new Error('Something went wrong!');
        }
        const data = await response.json();
        
        return data;   
}

export async function postMeals(order) {
    const response = await fetch('http://localhost:3000/orders',{
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
            "Content-Type": "application/json",
        }
    });

    if(!response.ok){
        throw new Error('Something went wrong!');
    }
    const result = await response.json();
  
    return result;
}