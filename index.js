const express = require('express')
const app = express()

const cookies = {
    cookies: [
    {
        name: "Chocolate Chip Cookie",
        image: "https://media.istockphoto.com/id/1455802788/photo/freshly-baked-chocolate-chip-cookies.jpg?s=612x612&w=0&k=20&c=RpizvozcpNfxr5efznmNQ3goXu11bkwG5y-oMK2XtKg=",
        origin: "United States",
        flavors: ["Classic", "Dark Chocolate", "Double Chocolate"],
        ingredients: ["Flour", "Butter", "Sugar", "Chocolate Chips", "Eggs", "Vanilla Extract"],
        path: "/cookie/0"
    },
    {
        name: "Macaron",
        image: "https://preppykitchen.com/wp-content/uploads/2015/12/Macaron-blog2.jpg",
        origin: "France",
        flavors: ["Raspberry", "Pistachio", "Vanilla", "Chocolate"],
        ingredients: ["Almond Flour", "Egg Whites", "Powdered Sugar", "Granulated Sugar", "Food Coloring"],
        path: "/cookie/1"
    },
    {
        name: "Snickerdoodle",
        image: "https://www.modernhoney.com/wp-content/uploads/2018/12/The-Best-Snickerdoodle-Cookie-Recipe-9jpg.jpg",
        origin: "Germany",
        flavors: ["Classic", "Cinnamon Sugar", "Brown Butter"],
        ingredients: ["Flour", "Butter", "Sugar", "Cinnamon", "Cream of Tartar", "Eggs"],
        path: "/cookie/2"
    },
    {
        name: "Shortbread Cookie",
        image: "https://www.simplyrecipes.com/thmb/cyLoKdJr6HPBJtx9FNw7ZNB_QUE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Shortbread-LEAD-6-176c3c39597b474cbb2683595a535b39.jpg",
        origin: "Scotland",
        flavors: ["Butter", "Vanilla", "Lemon", "Chocolate Drizzle"],
        ingredients: ["Flour", "Butter", "Sugar", "Salt"],
        path: "/cookie/3"
    },
    {
        name: "Gingerbread Cookie",
        image: "https://www.skinnytaste.com/wp-content/uploads/2011/12/low-fat-gingerbread-men.jpg",
        origin: "Germany",
        flavors: ["Classic Ginger", "Molasses", "Spiced Orange"],
        ingredients: ["Flour", "Molasses", "Brown Sugar", "Ginger", "Cinnamon", "Nutmeg", "Eggs"],
        path: "/cookie/4"
    }
]
}

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
response.render("overview.ejs", cookies)
})

app.get("/cookies/:index", (request, response) =>{
    const i = request.params.index
    response.render("cookies.ejs", cookies.cookies[i])
})

app.listen(3000, () => {
    console.log("Server running")
  })