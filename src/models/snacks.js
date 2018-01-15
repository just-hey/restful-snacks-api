const uuid = require('uuid')
const snacks = [ { id: '1e55709e-bc44-4500-b86d-554d79acbaeb', name: 'Nice Bag\'o\'Chips', qty: 12, imported: true }, { id: '0e0c2a87-09b8-455b-a963-3c27e8ecd7ef', name: 'Candy Bar', qty: 9999, import: false}, { id: '7500b7c3-e3fe-4a94-b48d-1fe06e5a5a64', name: 'Candy Bar', qty: 1, import: true} ]

const getAll = (limit) => {
  if (limit) return snacks.slice(0, limit)
  return snacks
}

const getOne = (id) => {
  return snacks.find(snack => snack.id === id)
}

const create = (name, qty, imported) => {

}

const update = () => {

}

const destroy = () => {

}

module.exports = { getAll, getOne, create, update, destroy }
