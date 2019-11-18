const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const productoController = require("../controllers/productoController");

module.exports = function() {
  // Agregar nuevos clientes via POST
  router.post("/clientes", clienteController.nuevoCliente);

  // Mostrar todos los clientes
  router.get("/clientes", clienteController.mostrarClientes);

  // Mostrar un cliente por el id
  router.get("/clientes/:idCliente", clienteController.mostrarCliente);

  // Actualizar un cliente
  router.put("/clientes/:idCliente", clienteController.actualizarCliente);

  // Eliminar un cliente
  router.delete("/clientes/:idCliente", clienteController.eliminarCliente);

  // Agregar un nuevo producto
  router.post("/productos", productoController.nuevoProducto);

  return router;
};
