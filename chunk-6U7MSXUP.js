import{c as n}from"./chunk-G4DRSHJR.js";var i=class{constructor(e,t){this.name=e,this.amount=t}};var s=class{constructor(){this.ingredientChanged=new n,this.startedEditing=new n,this.ingredients=[new i("Apples",5),new i("Tomatos",10)]}getIngredients(){return this.ingredients.slice()}getIngredient(e){return this.ingredients[e]}addIngredient(e){this.ingredients.push(e),this.ingredientChanged.next(this.ingredients.slice())}addIngredients(e){this.ingredients.push(...e),this.ingredientChanged.next(this.ingredients.slice())}updateIngredient(e,t){this.ingredients[e]=t,this.ingredientChanged.next(this.ingredients.slice())}deleteIngredient(e){this.ingredients.splice(e,1),this.ingredientChanged.next(this.ingredients.slice())}};export{i as a,s as b};
