const express = require("express");
const router = express.Router();
const clienteController = require("../controllers/clienteController");
const productoController = require("../controllers/productoController");
const pedidoController = require("../controllers/pedidoController");

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
  router.post(
    "/productos",
    productoController.subirArchivo,
    productoController.nuevoProducto
  );

  // Mostrar todos los productos
  router.get("/productos", productoController.mostrarProductos);

  // Mostrar un producto por el id
  router.get("/productos/:idProducto", productoController.mostrarProducto);

  // Actualizar un producto por el id
  router.put(
    "/productos/:idProducto",
    productoController.subirArchivo,
    productoController.actualizarProducto
  );

  // Eliminar un producto por el id
  router.delete("/productos/:idProducto", productoController.eliminarProducto);

  // Agregar un pedido
  router.post("/pedidos", pedidoController.agregarPedido);

  // Muestra todos los pedidos
  router.get("/pedidos", pedidoController.mostrarPedidos);

  // Muestra un pedido
  router.get("/pedidos/:idPedido", pedidoController.mostrarPedido);

  // Actualiza un pedido
  router.put("/pedidos/:idPedido", pedidoController.actualizarPedido);

  return router;
};
