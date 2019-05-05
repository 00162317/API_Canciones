var express = require('express'), 
  router = express.Router(),
  cancionController=require('../controllers/songController')



router.get('/',cancionController.getAll);
router.get('/id/:id',cancionController.getById);
router.get('/name/:name',cancionController.getByName);

router.post('/',cancionController.insertar);

router.put('/:id',cancionController.update);

router.delete('/:id',cancionController.delete);

module.exports = router;
