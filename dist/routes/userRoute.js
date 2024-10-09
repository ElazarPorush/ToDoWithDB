"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const userController_1 = require("../controllers/userController");
router.post('/', userController_1.register);
router.get('/', userController_1.getAllUsers);
exports.default = router;
