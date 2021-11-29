import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tb_usuario from  "./tb_usuario.js";

export default function initModels(sequelize) {
  const tb_usuario = _tb_usuario.init(sequelize, DataTypes);


  return {
    tb_usuario,
  };
}
