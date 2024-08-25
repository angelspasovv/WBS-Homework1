const mongoose = require("mongoose");

const artistSchema = mongoose.Schema({
    username: String,
    fullName: String,
    followers: Number,
    monthlyListeners: Number,
});

const ArtistModel = mongoose.model("Artist", artistSchema, "spotify-artists");

const read = async () => {
    return await ArtistModel.find();
};

const add = async (data) => {
    const newArtist = new ArtistModel(data);
    return await newArtist.save();
};

const update = async (id, data) => {
    return await ArtistModel.updateOne({ _id: id}, data);
};

const remove = async (id) => {
    return await ArtistModel.deleteOne({ _id: id});
};

module.exports = {
    read,
    add,
    update,
    remove,
};