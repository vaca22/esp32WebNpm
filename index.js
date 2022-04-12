const express = require('express');

const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
var fs = require('fs');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use('/', express.static(__dirname));
app.use(fileUpload({
    createParentPath: true
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    res.end()
});

app.post('/update', async (req, res) => {
    try {
        console.log("fuck2")
        if(!req.files) {
            console.log("fuck")
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            console.log("fuck3")
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let content = req.files;
            //
            // //Use the mv() method to place the file in upload directory (i.e. "uploads")
            console.log(content.update.md5)
            console.log(content.update)
            fs.writeFile(__dirname+"/test.txt", content.update.data,  "binary",function(err) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("The file was saved!");
                }
            });

            //send response
            res.end()
            // res.send({
            //     status: true,
            //     message: 'File is uploaded',
            //     data: {
            //         name: avatar.name,
            //         mimetype: avatar.mimetype,
            //         size: avatar.size
            //     }
            // });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/status', (req, res) => {
    console.log("fuck2")
    res.end("ok")
});


app.get('/control', (req, res) => {
    console.log("fuck233")
    res.end("ok")
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});