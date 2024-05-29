const {Registro} = require('../db')

module.exports = async (req, res) => {
  try {
    const data = await Registro.findAll()
    if(data.length < 1 ){
      res.status(404).json({message: 'No hay registros'})
      return
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json(error)
  }
}