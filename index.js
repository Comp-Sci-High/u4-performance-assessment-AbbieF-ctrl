const express = require('express')
const app = express()

const cookies = [
    {
        name: "Chocolate Chip Cookie",
        origin: "United States",
        flavors: ["Classic", "Dark Chocolate", "Double Chocolate"],
        ingredients: ["Flour", "Butter", "Sugar", "Chocolate Chips", "Eggs", "Vanilla Extract"]
    },
    {
        name: "Macaron",
        origin: "France",
        flavors: ["Raspberry", "Pistachio", "Vanilla", "Chocolate"],
        ingredients: ["Almond Flour", "Egg Whites", "Powdered Sugar", "Granulated Sugar", "Food Coloring"]
    },
    {
        name: "Snickerdoodle",
        origin: "Germany",
        flavors: ["Classic", "Cinnamon Sugar", "Brown Butter"],
        ingredients: ["Flour", "Butter", "Sugar", "Cinnamon", "Cream of Tartar", "Eggs"]
    },
    {
        name: "Shortbread Cookie",
        origin: "Scotland",
        flavors: ["Butter", "Vanilla", "Lemon", "Chocolate Drizzle"],
        ingredients: ["Flour", "Butter", "Sugar", "Salt"]
    },
    {
        name: "Gingerbread Cookie",
        origin: "Germany",
        flavors: ["Classic Ginger", "Molasses", "Spiced Orange"],
        ingredients: ["Flour", "Molasses", "Brown Sugar", "Ginger", "Cinnamon", "Nutmeg", "Eggs"]
    }
];

app.set("view engine", "ejs")

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })

  app.use(express.static(__dirname + "/public"))

  app.get("/", (request, response) =>{
   response.render("index.html")
  })

app.get("/overview", (request, response) =>{
response.status(200).send("Please wait for me to finish!")
})

app.listen(3000, () => {
    console.log("Server running")
  })