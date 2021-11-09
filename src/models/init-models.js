import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _usuario from  "./usuario.js";

export default function initModels(sequelize) {
  const usuario = _usuario.init(sequelize, DataTypes);


  return {
    usuario,
  };
}
