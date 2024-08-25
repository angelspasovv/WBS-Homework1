const { readFile, writeFile } = require("../read-write");

const getArtists = async (req, res) => {
    try {
        const artists = await readFile("spotify-artists.json");
        return res.status(200).send(artists);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error!");
    };
};

const addArtists = async (req, res) => {
    try {
        const artists = await readFile("spotify-artists.json");
        const newArtist = req.body;
        artists.push(newArtist);
        await writeFile("spotify-artists.json", artists);
        return res.status(200).send("New artist added!");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error!");
    };
};

const updateArtists = async (req, res) => {
    try {
        let artists = await readFile("spotify-artists.json");
        const artistId = Number(req.params.id);
        const newData = req.body;

        artists = artists.map((artist, index) => {
            if (index === artistId) {
                return {
                    ...artist,
                    ...newData,
                };
            };
            return artist;
        });
        await writeFile("spotify-artists.json", artists);
        return res.status(200).send("Artist updated successfully!");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error!");
    };
};

const removeArtists = async (req, res) => {
    try {
        let artists = await readFile("spotify-artists.json");
        const artistId = Number(req.params.id);

        artists = artists.filter((artist, index) => index !== artistId);
        await writeFile("spotify-artists.json", artists);
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