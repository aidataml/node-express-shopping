/* Use this list of ***items*** in your routes and test files.

Your application should have the following routes:

1. ***GET /items*** - this should render a list of shopping items.

Here is what a response looks like:

**[{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]** */

router.get('', function(req, res, next) {
    try {
      return res.json({ items: Item.findAll() });
    } catch(err){
      return next(err)
    }
  });

/* 2. ***POST /items*** - this route should accept JSON data and add it to the shopping list.

Here is what a sample request/response looks like:

**{“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}}** */

router.post('', function (req, res, next) {
    try {
      let newItem = new Item(req.body.name, req.body.price);
      return res.json({item: newItem});
    } catch (err) {
      return next(err)
    }
  });


/* 3. ***GET /items/:name*** - this route should display a single item’s name and price.

Here is what a sample response looks like:

**{“name”: “popsicle”, “price”: 1.45}** */

router.get('/:name', function (req, res, next) {
    try {
      let foundItem = Item.find(req.params.name);
      return res.json({item:foundItem});
    } catch(err){
      return next(err)
    }
  });

/* 4. ***PATCH /items/:name***, this route should modify a single item’s name and/or price.

Here is what a sample request/response looks like:

**{“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}** */

router.patch('/:name', function (req, res, next) {
    try {
      let foundItem = Item.update(req.params.name, req.body);
      return res.json({ item: foundItem });
    } catch (err) {
      return next(err)
    }
  });

/* 5. ***DELETE /items/:name*** - this route should allow you to delete a specific item from the array.

Here is what a sample response looks like:

**{message: “Deleted”}** */

router.delete('/:name', function (req, res, next) {
    try {
      Item.remove(req.params.name);
      return res.json({message:"Deleted"});
    } catch (err) {
      return next(err)
    }
  });
  
  module.exports = router;