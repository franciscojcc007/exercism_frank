/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer) {
  if(timer === 0){
    return 'Lasagna is done.'
  }else if(!timer){
    return 'You forgot to set the timer.'
  }else{
  return 'Not done, please wait.'
  }
}

export function preparationTime(layers, time = 2){
  return (layers.length) * time
}


export function quantities(capas){
  return {
    noodles: capas.filter(value => value === 'noodles').length * 50,
    sauce: capas.filter(value => value === 'sauce').length * 0.2,
  }
}

 export function addSecretIngredient(friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
 }

export function scaleRecipe(recipe, num){
  const scaledRecipe = {}
  for (const i in recipe) {
    scaledRecipe[i] = recipe[i] * ( num / 2)
  }
 return scaledRecipe
}