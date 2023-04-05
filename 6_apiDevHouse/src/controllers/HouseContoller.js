
class HouseContoller{
  async store(req, res){ // lembre-se store é criação de sessão

    console.log(req.body)
    console.log(req.file)
    return res.json({ ok: true })

  }
}


export default new HouseContoller();