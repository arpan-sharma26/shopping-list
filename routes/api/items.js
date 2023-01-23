// routes for items.
const express = require('express');
const router = express.Router();

// Bring in Item Model.
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public

router.get("/", (req, res) => {
    Item.find().sort({ date: -1 })
        .then(items => {
            res.json(items);
        }).catch(err => {
            console.log(err);
        });
});


// @route   POST api/items
// @desc    Create a Post request.
// @access  Public
router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete a specific ID or record
// access   Private
router.delete("/:id", (req, res) => {

    const id = req.params.id;

    Item.findById(id).then(item => {
        item.remove().then(() => {
            res.json({ success: true });
        })
    }).catch(err => {
        res.status(404).json({ "error": "Record not found."})
    });
});


module.exports = router;