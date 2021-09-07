// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesAPI = "https://restcountries.eu/rest/v2/all";

fetch(countriesAPI)
    .then(response => response.json())  
    .then(data => {
        const newArr =[];
        console.log(data);
        for(const country of data) {
            let {name, capital, languages, population, area} = country;
            newArr.push({name, capital, languages, population, area});
        }
        console.log(newArr);
    }).catch(error => console.error(error));

    
    
    // const fetchCountriesUrl = async () =>{
    //     try {
    //         const newArr = []
    //         const response = await fetch(countriesAPI)
    //         const data = await response.json()
    //         for (const country of data) {
    //             let{name,capital,languages,population,area} = country
    //             newArr.push({name,capital,languages,population,area})
    //         }
    //         console.log(newArr)
    
    //     }
    //     catch (error){
    //         console.log(error)
    
    //     }
    // }
    // fetchCountriesUrl()    


// Print out all the cat names in to catNames variable.
    const catsAPI = 'https://api.thecatapi.com/v1/breeds';

fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const catName = [];
        for(const cat of data) {
            let{name} = cat;
            catName.push(name);
        }
        console.log(catName);
    }).catch(error => console.log(error));