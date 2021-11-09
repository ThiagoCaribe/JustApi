import initdb from './models/init-models.js'
import  Sequelize  from 'sequelize'

const  sequelize = new  Sequelize(
    'teste',
    'root',
    'admin',{
        host :'localhost',
        dialect: 'mysql',
        loggging : false
    });
const  db = initdb(sequelize);
export default db;

