import { Router } from "express"
const router: Router = require('express').Router()
import { register, getAllUsers } from "../controllers/userController"


router.post('/', register)

router.get('/', getAllUsers)


export default router