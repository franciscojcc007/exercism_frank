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
  if(timer === 0)return 'Lasagna is done.'
  if(timer)return 'Not done, please wait.'
  if(!timer)return 'You forgot to set the timer.'
}

export function preparationTime(layers, time = 2){
  return (layers.length) * time
}

export function quantities(capas){
   let noodles = 0
    let sauce = 0
    for (let i = 0; i < capas.length; i++) {
        if(capas[i]=== 'noodles') noodles += 50
        if(capas[i]=== 'sauce') sauce += 0.2
    }
    return {
        noodles,
        sauce
    }
}

export function addSecretIngredient(friendsList, myList){
  const secretIngredient = friendsList[friendsList.length - 1]
  myList.push(secretIngredient)
}


export function scaleRecipe(recipe, num){
  const scaledRecipe = {}

  for (const i in recipe) {
    scaledRecipe[i] = recipe[i] * ( num / 2)
  }
 return scaledRecipe
}