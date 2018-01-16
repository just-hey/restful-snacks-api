const uuid = require('uuid')
const snacks = [ { id: '1e55709e-bc44-4500-b86d-554d79acbaeb', name: 'Nice Bag\'o\'Chips', qty: 12, imported: true }, { id: '0e0c2a87-09b8-455b-a963-3c27e8ecd7ef', name: 'Candy Bar', qty: 9999, imported: false}, { id: '7500b7c3-e3fe-4a94-b48d-1fe06e5a5a64', name: 'Candy Bar', qty: 1, imported: true} ]

const getAll = (limit) => {
  if (limit) return snacks.slice(0, limit)
  return snacks
}

const getOne = (id) => {
  return snacks.find(snack => snack.id === id)
}

const create = (name, qty, imported) => {
  const exists = snacks.find(snack => snack.name === name)
  if(!exists) {
    let newSnack = { id: uuid(), name, qty, imported}
    snacks.push(newSnack)
    return newSnack
  }
  return { status: 400, message: 'Name already in use.' }
}

const update = (id, body) => {
  let exists = snacks.find(snack => snack.id === id)
  if (exists) {
    exists.name = body.name || exists.name
    exists.qty = body.qty || exists.qty
    if(body.imported !== undefined) {
      let newImported = body.imported
      exists.imported = newImported
    }
    return exists
  }
  return { status: 404, message: `Snack with ID: ${id} not found.`}
}

const destroy = (id) => {
  const exists = snacks.find(snack => snack.id === id)
  if(!exists) return { status: 404, message: `Snack with ID: ${id} not found.` }
  let index = snacks.indexOf(exists)
  snacks.splice(index, 1)
  return exists
}

module.exports = { getAll, getOne, create, update, destroy }
