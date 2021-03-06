var express = require('express');
var router = express.Router();
const Washmachine = require('../models/Washmachine');
const washmachineController = require('../controllers/washmachineController');
// const LocationDetails =
// require('../models/LocationDetails');
// const locationdetailsController =
// require('../controllers/locationdetailsController')

/* GET home page. */
router.get('/', washmachineController.getWashmachines);
router.get('/api', washmachineController.getApiWashmachines);

router.post('/', washmachineController.createWashmachines);
router.post('/api', washmachineController.createApiWashmachines);

router.get('/washmachines/:id/edit', washmachineController.editWashmachines);
router.get('/api/:id', washmachineController.getWashmachineApi);


router.post('/washmachines/:id/edit', washmachineController.updateWashmachines);
router.post('/api/:id/edit', washmachineController.updateApiWashmachines);


router.get('/washmachine/:id/delete', washmachineController.deleteWashmachines);
router.delete('/api/washmachines/:id', washmachineController.deleteWashmachineApi);

// router.get('/', locationdetailsController.getLocationDetails);
//
// router.post('/',
// locationdetailsController.createLocationDetails);





module.exports = router;
