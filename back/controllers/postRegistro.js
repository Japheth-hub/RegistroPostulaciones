const {Registro, Portal} = require('../db')

module.exports = async (req, res) => {
  try {
    const body = req.body;

    const portal = await Portal.findByPk(body.id)

    const registro = await Registro.create({
      vacante: body.vacante,
      empresa: body.empresa
    }) 

    await registro.addPortal(portal)
    res.status(200).json({message: 'Registro guardado'})
    return
  
  } catch (error) {
    res.status(500).json(error)
  }
}