const express = require('express')
const app = express()
const port = 3000

app.use(express.static('images'))

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send("Server del mio blog");
})

const posts = [
    {
        title: "Ciambellone" ,
        content: "Ricetta Ciambellone" ,
        image: "/public/ciambellone.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    },
    {
        title: "Cracker alla Barbabietola" ,
        content: "Ricetta Cracker" ,
        image: "/public/cracker_barbabietola.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    },
    {
        title: "Pane Fritto Dolce" ,
        content: "Ricetta Pane" ,
        image: "/public/pane_fritto_dolce.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    },
    {
        title: "Pasta Barbabietola" ,
        content: "Ricetta Pasta" ,
        image: "/public/pasta_barbabietola.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    },
    {
        title: "Torta Paesana" ,
        content: "Ricetta Torta" ,
        image: "/public/torta_paesana.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    }
]

app.get('/bacheca', (req, res) => {
    
    res.json(posts)

})