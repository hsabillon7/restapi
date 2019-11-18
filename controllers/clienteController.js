const Cliente = require("../models/Cliente");

// Agregar un nuevo cliente
exports.nuevoCliente = async (req, res, next) => {
  const cliente = new Cliente(req.body);

  try {
    await cliente.save();
    // res.json({ mensaje: "Se agregó correctamente el nuevo cliente" });
    res
      .status(200)
      .send({ mensaje: "Se agregó correctamente el nuevo cliente" });
  } catch (error) {
    res.status(422).send({
      error: "Ha ocurrido un error al momento de almacenar el cliente"
    });
  }
};

// Mostrar todos los clientes
exports.mostrarClientes = async (req, res, next) => {
  try {
    const clientes = await Cliente.find({});
    res.status(200).send(clientes);
  } catch (error) {
    console.log(error);

    res
      .status(422)
      .send({ error: "Hubo un problema al momento de obtener los clientes" });
  }
};

// Mostrar un cliente en específico
exports.mostrarCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findById(req.params.idCliente);

    if (!cliente) {
      res.status(404).send({ error: "El cliente no existe" });
    }

    res.status(200).send(cliente);
  } catch (error) {
    res
      .status(422)
      .send({ error: "Ha ocurrido un error al momento de obtener el cliente" });
  }
};

// Actualiza un cliente por su id
exports.actualizarCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findOneAndUpdate(
      { _id: req.params.idCliente },
      req.body,
      { new: true }
    );

    res.status(200).send(cliente);
  } catch (error) {
    res
      .status(422)
      .send({ error: "Ha ocurrido un error al momento de actualizar" });
  }
};

// Elimina un cliente por su id
exports.eliminarCliente = async (req, res, next) => {
  try {
    await Cliente.findByIdAndDelete({ _id: req.params.idCliente });

    res.status(200).send({ mensaje: "Cliente eliminado satisfactoriamente" });
  } catch (error) {
    res
      .status(422)
      .send({ error: "Ha ocurrido un error al momento de eliminar" });
  }
};
