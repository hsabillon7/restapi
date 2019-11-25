const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
  cliente: {
    type: Schema.ObjectId,
    ref: "Cliente"
  },
  pedido: [
    {
      producto: {
        type: Schema.ObjectId,
        ref: "Producto"
      },
      cantidad: Number
    }
  ],
  total: Number
});

module.exports = mongoose.model("Pedido", pedidoSchema);
