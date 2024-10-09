"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoController_1 = require("../controllers/todoController");
const router = require('express').Router();
router.post('/', todoController_1.createToDo);
router.get('/', todoController_1.getAllTodo);
exports.default = router;
