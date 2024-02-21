export async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals');

        if(!response.ok){
            throw new Error('Something went wrong!');
        }
        const data = await response.json();
        
        return data;   
}

