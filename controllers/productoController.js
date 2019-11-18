const Producto = require("../models/Producto");

// Agregar un producto
exports.nuevoProducto = async (req, res, next) => {
  const producto = new Producto(req.body);

  try {
    await producto.save();

    res
      .status(200)
      .send({ mensaje: "Se agregó correctamente el nuevo producto" });
  } catch (error) {
    res
      .status(422)
      .send({ error: "Ha ocurrido un error al momento de insertar" });
  }
};
