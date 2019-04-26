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
  }
}