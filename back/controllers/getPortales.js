const {Portal} = require('../db.js')

module.exports = async (req, res) => {
  try {
    const data = await Portal.findAll()
    if(data.length < 1 ){
      res.status(404).json({message : 'No hay portales'})
      return
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}