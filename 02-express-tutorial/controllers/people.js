
let { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({succes: 'true', data: people})
}

const postPerson = (req, res) => {
    const { name } = req.body
    if (!name){
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).json({success:true,person:name})
}

const postPersonPostman = (req, res) => {
    const { name } = req.body
    if (!name){
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true, data: [...people, { id: people.length + 1, name}]})
}

const updatePerson = (req, res) => {
    const { id } = req.params
    const { name } = req.body
  
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name
      }
      return person
    })
    res.status(200).json({ success: true, data: newPeople })
  }

  const deletePerson = (req, res) => {
    const { id } = req.params
  
    const person = people.find((person) => person.id === Number(id))
  
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: `no person with id ${id}` })
    }

    const deleteData = people.filter((each) => each.id !== Number(id))

    res.status(200).json({ success: true, data: deleteData})

  }

module.exports = { getPeople, postPerson, postPersonPostman, updatePerson, deletePerson }