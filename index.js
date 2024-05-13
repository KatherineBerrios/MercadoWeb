// Importando librerías
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const path = require("path");

//Configurar el servidor para servir archivos estáticos
app.use(express.static(path.join(__dirname, "views")));

// Motor de plantillas
app.set("view engine", "handlebars");

// Configuración handlebars
app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials/",
  })
);

// Mostrar página "main"
app.get("/", (req, res) => {
res.render("main");
});

// Mostrar arreglo
app.get("/productos", (req, res) => {
  const { productos } = res.json;
  res.render("Dashboard", {
    layout: "Dashboard",
    productosArray: [
      "banana",
      "cebollas",
      "lechuga",
      "papas",
      "pimenton",
      "tomate",
    ],
    productosImg: ["assets/banana.png", "assets/cebollas.png", "assets/lechuga.png", "assets/papas.png", "assets/pimenton.png", "assets/tomate.png"],
    productos: productos,
  });
});

// Integrando Bootstrap
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

// Integrando jQuery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'))

// Handlebars.registerPartial("parciales", "{{>partials.parciales}}\n");

// Servidor
app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
