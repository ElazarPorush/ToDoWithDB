import { Router } from "express"
import { createToDo, getAllTodo } from "../controllers/todoController"

const router: Router = require('express').Router()


router.post('/', createToDo)

router.get('/', getAllTodo)


export default router