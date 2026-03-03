interface Product{
    name: string,
    colors: string[]
};
let product: Product = {
    name: 'notebook',
    colors: ['red','black','gray']
};
interface Country3{
    capital: string,
    cities: string[]
}
let country3: Country3 = 
{
    capital: "London",
    cities: ['London', 'Manchester', 'Birmigham', 'Leister']
}
console.log(country3);