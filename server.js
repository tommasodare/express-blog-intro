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
        titol: "Ciambellone" ,
        content: "Ricetta Ciambellone" ,
        image: "/images/ciambellone.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    },
    {
        titol: "Cracker alla Barbabietola" ,
        content: "Ricetta Cracker" ,
        image: "/images/cracker_barbabietola.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    },
    {
        titol: "Pane Fritto Dolce" ,
        content: "Ricetta Pane" ,
        image: "/images/pane_fritto_dolce.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    },
    {
        titol: "Pasta Barbabietola" ,
        content: "Ricetta Pasta" ,
        image: "/images/pasta_barbabietola.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    },
    {
        titol: "Torta Paesana" ,
        content: "Ricetta Torta" ,
        image: "/images/torta_paesana.jpeg",
        tag: ["dolce", "ricetta", "fattoincasa"]
    }
]