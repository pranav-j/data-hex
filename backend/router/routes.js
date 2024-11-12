const express = require("express");
const { createInstance, getAllInstances, updateInstance, deleteInstance } = require("../controllers/crudController");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({message: "heheh"})
})

router.post("/instances", createInstance);

router.get("/instances", getAllInstances);

router.put('/instances/:id', updateInstance);

router.delete('/instances/:id', deleteInstance);

module.exports = router;