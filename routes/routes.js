const fs = require('fs');
const path = require('path');

module.exports = app =>{
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if(err) throw err;

        let notes = JSON.parse(data);

        //set up code for routes:

        //api get
        app.get("/api/notes", function(req, res{
            response.json(notes);
        });
        //api post
        app.post("/api/notes", function(req, res){
            let newItem = request.body;
            notes.push(newItem);
            updateDataBase();
            return console.log("Newest update: " + newItem.title);
        });

        app.get("/api/notes/:id", function (req, res){
            response.json(notes[request.params.id]);
        });

        app.get("/notes", function(req, res){
            response.sendFile(path.join(__dirname, "../public/notes.html"));
        });

        app.get('/', function(req, res){
            response.sendFile(path.join(__dirname, "../public/index.html"));
        });

        //update json db/local storage when changes are made:
        function updateDataBase() {
            fs.writeFile("db/db.json", JSON.stringify(notes, '\t'), err => {
                if(err) throw err;
                return true;
            });
        }

    });









}