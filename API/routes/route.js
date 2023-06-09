const express = require('express');
const pamController = require('../controllers/pamController');
const archdioceseController = require('../controllers/archdioceseController');
const zoneController = require('../controllers/zoneController');
const deaneryController = require('../controllers/deaneryController');
const groupController = require('../controllers/groupController');
const router = express.Router();

router.get('/api/getPams', pamController.getPams);
router.get('/api/getPamsGroups', pamController.getPamsGroups);
router.get('/api/getPamByEmail/:email', pamController.getPamByEmail);
router.post('/api/addPamByEmail', pamController.addPamByEmail);
router.get('/api/getPam/:id', pamController.getPam);
router.post('/api/addPam', pamController.addPam);
router.get('/api/getPamsWithTestResultInRange', pamController.getPamsWithTestResultInRange);
router.get('/api/sp_get_test_question_results', pamController.sp_get_test_question_results);
router.put('/api/updatePam/:id', pamController.updatePam);
router.delete('/api/deletePam/:id', pamController.deletePam);
router.get('/api/getGroupArchdioceses', archdioceseController.getArchdioceses);
//router.get('/api/getGroupArchdioceses', groupController.getGroupArchdioceses);
router.get('/api/getGroupData/:id', groupController.getGroupData);
router.get('/api/getZones/:id', zoneController.getZones);
router.get('/api/getdeaneries/:id', deaneryController.getDeaneries);
module.exports = router;

