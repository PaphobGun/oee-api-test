const express = require('express');

const tmController = require('../controllers/tm');

const router = express.Router();

router.get('/enum/FLAG/en', tmController.getEnumText);

router.get('/enum/TERMINALTYPE/en', tmController.getEnumTextType);

router.get('/mgt/terminal/type', tmController.getTerminalTypeList);

router.post('/mgt/terminal/list', tmController.getTermialnalList);

module.exports = router;
