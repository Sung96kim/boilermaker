//This is where router.use(<Specific path ex: /puppies would go/>, require('/puppies'))

const router = require('express').Router();

router.use(function ( req, res, next){
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
})

module.exports = router;
