const model = require('../models/snacks');

const getAll = (req, res, next) => {
  const response = model.getAll(req.query.limit)
  res.status(200).json({ response })
}

const getOne = (req, res, next) => {
  const response = model.getOne(req.params.id)
  if (!response) {
    console.log('no snacks!')
    return next({status: 404, message: 'Not Found'} )
  }
  res.status(200).json({ response })
}

const create = (req, res, next) => {
  let response
  const { name, qty, imported } = req.body
  if (!name || !qty || !imported) next({ error: {status: 400, message: 'All fields required'} })
  response = model.create(name, qty, imported)
  res.status(200).json({ response })
}

const update = (req, res, next) => {
  return model.update()
}

const destroy = (req, res, next) => {
  return model.destroy()
}

module.exports = { getAll, getOne, create, update, destroy }
