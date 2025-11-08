// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const dup = deck.map((num)=> num * 2)
  return dup
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
const result = [];
  for (const card of deck) {
    if (card === 3) {
      result.push(3, 3, 3);
    } else {
      result.push(card);
    }
  }
  return result;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.slice((deck.length /2) - 1,(deck.length /2)+ 1 )
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  let deckSuper = deck[0] 
  let deckInfer = deck[deck.length - 1]
  const middleIndex = deck.length / 2;
  
  let deckP = deck.slice(1, middleIndex)
  let deckU = deck.slice(middleIndex , deck.length - 1)
  return[...deckP, deckInfer, deckSuper, ...deckU]
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  let deckOnly = deck.filter((value)=> value === 2)
  return deckOnly
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  deck.sort((a,b)=> a - b)
  return deck
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse()
}
