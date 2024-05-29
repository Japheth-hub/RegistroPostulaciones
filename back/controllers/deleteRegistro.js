const {Registro} = require('../db')

module.exports = async (req, res) => {
  try {
    const {id} = req.params 
    const data = await Registro.destroy({where: {id}})
    if(data < 1 ){
      res.status(404).json({message: 'No se pudo eliminar'})
      return
    }
    res.status(200).json({message: 'Registro eliminado'})
  } catch (error) {
    res.status(500).json(error)
  }
}