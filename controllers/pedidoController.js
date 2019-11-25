const Pedido = require("../models/Pedido");

// Agregar un nuevo pedido
exports.agregarPedido = async (req, res, next) => {
  const pedido = new Pedido(req.body);

  try {
    await pedido.save();

    res.status(200).send({ mensaje: "Pedido agregado satisfactoriamente" });
  } catch (error) {
    res
      .stauts(422)
      .send({ error: "Ha ocurrido un error al momento de agregar el pedido " });
  }
};

// Muestra todos los pedidos
exports.mostrarPedidos = async (req, res, next) => {
  try {
    const pedidos = await Pedido.find({})
      .populate("cliente")
      .populate({
        path: "pedido.producto",
        model: "Producto"
      });

    res.status(200).send(pedidos);
  } catch (error) {
    res.stauts(422).send({
      error: "Ha ocurrido un error al momento de consultar los pedidos"
    });
  }
};

// Obtener un pedido por el id
exports.mostrarPedido = async (req, res, next) => {
  try {
    const pedidos = await Pedido.findById(req.params.idPedido)
      .populate("cliente")
      .populate({
        path: "pedido.producto",
        model: "Producto"
      });

    res.status(200).send(pedidos);
  } catch (error) {
    res.stauts(422).send({
      error: "Ha ocurrido un error al momento de consultar los pedidos"
    });
  }
};

// Actualizar un pedido por su id
exports.actualizarPedido = async (req, res, next) => {
  try {
    const pedido = await Pedido.findOneAndUpdate(
      { _id: req.params.idPedido },
      req.body,
      {
        new: true
      }
    )
      .populate("cliente")
      .populate({
        path: "pedido.producto",
        model: "Producto"
      });

    res.status(200).send(pedido);
  } catch (error) {
    res
      .status(422)
      .send({
        error: "Ha ocurrido un error al momento de actualizar el pedido."
      });
  }
};
