const Instance = require("../models/instanceModel.js");

exports.createInstance = async (req, res) => {
    try {
      const { instanceName, participantTypes, tickets, alloted, checkin, pending } = req.body;

      console.log({ instanceName, participantTypes, tickets, alloted, checkin, pending });
  
      const newInstance = new Instance({
        instanceName,
        participantTypes,
        tickets,
        alloted,
        checkin,
        pending
      });
  
      await newInstance.save();
      console.log("Instance cretaed");
      
      res.status(201).json({ message: "Instance created successfully", instance: newInstance });
    } catch (error) {
      res.status(500).json({ message: "Error creating instance", error: error.message });
    }
};

exports.getAllInstances = async (req, res) => {
    try {
      const instances = await Instance.find({});
      res.status(200).json(instances);
    } catch (error) {
      res.status(500).json({ message: "Error fetching instances", error: error.message });
    }
};

exports.updateInstance = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedInstance = await Instance.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedInstance) {
            return res.status(404).json({ message: "Instance not found" });
        }
        res.status(200).json({ instance: updatedInstance });
    } catch (error) {
        console.error("Error updating instance:", error);
        res.status(500).json({ message: "Error updating instance" });
    }
};

exports.deleteInstance = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedInstance = await Instance.findByIdAndDelete(id);
        if (!deletedInstance) {
            return res.status(404).json({ message: "Instance not found" });
        }
        res.status(200).json({ message: "Instance deleted successfully" });
    } catch (error) {
        console.error("Error deleting instance:", error);
        res.status(500).json({ message: "Error deleting instance" });
    }
};
