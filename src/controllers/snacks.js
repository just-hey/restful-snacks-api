const model = require('../models/snacks');

const getAll = (req, res, next) => {
  const response = model.getAll(req.query.limit)
  res.status(200).json({ response })
}

const getOne = (req, res, next) => {
  const response = model.getOne(req.params.id)
  if (!response) next({status: 404, message: 'Not Found'})
  res.status(200).json({ response })
}

const create = (req, res, next) => {
  const { name, qty, imported } = req.body
  if (!name || !qty || imported === undefined) return next({status: 400, message: 'All fields required'})
  let response = model.create(name, qty, imported)
  if (response.status) {
    return next(response)
  }
  res.status(201).json({ response })
}

const update = (req, res, next) => {
  let response = model.update(req.params.id, req.body)
  res.status(200).json({ response })
}

const destroy = (req, res, next) => {
  const response = model.destroy(req.params.id)
  if (response.status) next( {response} )
  res.status(200).json({ response })
}

module.exports = { getAll, getOne, create, update, destroy }
