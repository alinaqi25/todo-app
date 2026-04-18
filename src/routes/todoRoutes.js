import express from 'express'
import db from '../db.js'

const router = express.Router()

// get or post all the todos from an authenticated user

router.get('/', (req, res)=>{
    const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?')
    const todos = getTodos.all(req.userId)

    res.json(todos)
})

router.post('/', (req, res)=>{

})

// edit a todo
router.put('/', (req, res)=>{

})


export default router