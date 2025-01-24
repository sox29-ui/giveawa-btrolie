const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');
const app = express();
const port = 9898;
var data = {
    "users":{"s":["OFF","2"]},
    "Admins":{
        "users":["Sox","Toto"],
        "data":{
            "Sox":{
                "pas":"sox@123",
                "pr":["✣ Admin","✣ Data","✣ Role","✣ Users","✣ File","✣ Posts"],
                "role":"Developer",
                "type":"𝐇𝐎𝐒𝐓",
                "sex":"man"
            },
            "Toto":{
                "pas":"t123",
                "pr":["✣ File","✣ Posts","✣ Data","✣ Admin","✣ Role","Join Data","Star Habh","Add ads","Delete com","Remove","Edit","Create","Main","Profile","Post","✣ Users","Create user","Remove user","Controle user","Block user","Unblock user","Add bot","Warn","System Warn","Role users","System Role"],
                "role":"Designer",
                "type":"𝐅𝐨𝐮𝐧𝐝𝐞𝐫",
                "sex":"woman"
            }
        }
    }
}
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

app.get('/data', (req, res) => {
    res.send(data);
});
app.get('/sign-in.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'sign-in.html'));
});
app.post('/', (req, res) => {
    const { dat } = req.body;
    data = dat
});

// app.get('/run-python', (req, res) => {
//     exec('python script.py', (error, stdout, stderr) => {
//         if (error) {
//             console.error(`Error: ${error.message}`);
//             return res.send(`Error: ${error.message}`);
//         }
//         if (stderr) {
//             console.error(`Stderr: ${stderr}`);
//             return res.send(`Stderr: ${stderr}`);
//         }
//         res.send(stdout);
//     });
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
