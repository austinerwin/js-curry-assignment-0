'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      let arr = new Array(count)
      arr.fill(itemName)
      return arr
    }

const fillCart =
  itemsObj => {
    let arr = []
    for (let itemName in itemsObj) {
      arr = arr.concat(itemRepeater(itemName)(itemsObj[itemName]))
    }
    return arr
  }
/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      return customers.map((customer) => {
        return { customer: customer.name, items: fillCart(customer.shoppingList) }
      })
    }

module.exports = {
  listing,
  customer,
  constructCarts
}
