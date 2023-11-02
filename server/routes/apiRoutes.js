// routes/stackRoutes.js
const express = require('express');
const stackController = require('../controllers/stackController');

const router = express.Router();

router.post('/stack', stackController.pushToStack);
router.delete('/stack', stackController.popFromStack);
router.get('/stack', stackController.getStack);
router.put('/stackSize', stackController.updateStackSize);
router.get('/stackSize', stackController.getStackSize);

module.exports = router;