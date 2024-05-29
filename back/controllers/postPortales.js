const {Portal} = require('../db')

module.exports = async (req, res) => {
  try {
    const {name} = req.body;
    const [portal, created] = await Portal.findOrCreate({
      where : {name : name}
    })
    if(created){
      res.status(200).json({message: 'Portal agregado'})
    } else {
      res.status(200).json({message: 'Este portal ya existe'})
    }
  } catch (error) {
    res.status(500).json('este es el eror' + error)
  }
}