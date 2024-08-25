const express = require("express");

const connect = require("./db/config");
connect();

const { getArtists, addArtists, updateArtists, removeArtists} = require("./handlers/artists");

const app = express();

app.use(express.json());

app.get("/artists", getArtists);
app.post("/artists", addArtists);
app.put("/artists/:id", updateArtists);
app.delete("/artists/:id", removeArtists);

app.listen(3000, () => console.log("Server started at port 3000!"));