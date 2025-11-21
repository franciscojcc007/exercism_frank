/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const foo1 = 'Margherita' 
  const foo2 = 'Caprese' 
  const foo3 = 'Formaggio'
  const extra = 'ExtraSauce'
  let total = 0

  switch(pizza){
    case foo1:
      total += 7
      break
    case foo2:
      total += 9
      break
    case foo3:
      total += 10
      break
  }
  
  for(let i = 0; i < extras.length; i++){
    if(extras[i] === extra){
      total += 1
    }else {
      total += 2
    }
  }
  
  return total 
}
/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let total = 0;

  for (let i = 0; i < pizzaOrders.length; i++) {
    const current = pizzaOrders[i];
    const price = pizzaPrice(current.pizza, ...current.extras);
    total += price;
  }
  return total;
}
