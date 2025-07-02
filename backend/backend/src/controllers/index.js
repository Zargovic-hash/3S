class IndexController {
    async getData(req, res) {
        try {
            // Logic to retrieve data
            res.status(200).json({ message: "Data retrieved successfully" });
        } catch (error) {
            res.status(500).json({ error: "An error occurred while retrieving data" });
        }
    }

    async postData(req, res) {
        try {
            // Logic to process and save data
            res.status(201).json({ message: "Data saved successfully" });
        } catch (error) {
            res.status(500).json({ error: "An error occurred while saving data" });
        }
    }
}

module.exports = IndexController;