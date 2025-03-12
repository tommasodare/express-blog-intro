const express = require('express')
const app = express()
const port = 3000

app.use(express.static('images'))

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>");
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
        content: "Ricetta Cracker alla Barbabietola" ,
        image: "/public/cracker_barbabietola.jpeg",
        tag: ["aperitivo", "salato", "barbabietola"]
    },
    {
        title: "Pane Fritto Dolce" ,
        content: "Ricetta Pane Fritto Dolce" ,
        image: "/public/pane_fritto_dolce.jpeg",
        tag: ["pane", "ricetta", "fritto"]
    },
    {
        title: "Pasta alla Barbabietola" ,
        content: "Ricetta Pasta alla Barbabietola" ,
        image: "/public/pasta_barbabietola.jpeg",
        tag: ["primo", "barbabietola", "fattoincasa"]
    },
    {
        title: "Torta Paesana" ,
        content: "Ricetta Torta Paesana" ,
        image: "/public/torta_paesana.jpeg",
        tag: ["dolce", "ingredienti", "fattoincasa"]
    }
]

app.get('/bacheca', (req, res) => {
    
    const titoli = posts.map(post => post.title);
    
    const tags = posts.map(tag => tag.tag)

    const images = []
    for (let index = 0; index < posts.length; index++) {
        const image = posts[index].image;
        images.push(image)
    }
    
    res.json(posts)

})