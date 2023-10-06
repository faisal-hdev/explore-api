const user = { id: "011", name: "Jhon", job: "Actor" };
// js object notation (json)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);
/* 
   { id: '011', name: 'Jhon', job: 'Actor' }
   {"id":"011","name":"Jhon","job":"Actor"} 
*/

const shop = {
  owner: "alia",
  address: {
    street: "london",
    city: "ranbir",
    country: "bd",
  },
  products: ["laptop", "mic", "monitor", "keyboard"],
  revenue: 450000,
  isOpen: true,
  isNew: false,
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
