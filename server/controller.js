module.exports = {
  retrieve: (req, res) => {
    const db = req.app.get("db")
    db.get_all_houses()
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  },

  create: (req, res) => {
    const db = req.app.get("db")
    const { name, address, city, state, zip, img, mortgage, rent } = req.body
    db.create_house([name, address, city, state, zip, img, mortgage, rent])
      .then(response => {
        res.status(200).send(response)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }
}