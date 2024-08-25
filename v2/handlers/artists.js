const { read, add, update, remove} = require("../models/artists");

const getArtists = async (req, res) => {
    try {
        const artists = await read();
        return res.status(200).send(artists);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error!");
    };
};

const addArtists = async (req, res) => {
    try {
        await add(req.body);
        return res.status(200).send("New artist added!");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error!");
    };
};

const updateArtists = async (req, res) => {
    try {
        await update(req.params.id, req.body);
        return res.status(200).send("Artist updated successfully!");
        } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error!");
    };
};

const removeArtists = async (req, res) => {
    try {
        await remove(req.params.id);
        return res.status(200).send("Artist deleted successfully!")
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error!");
    };

};

module.exports = {
    getArtists,
    addArtists,
    updateArtists,
    removeArtists
}