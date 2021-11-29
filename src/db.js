import initdb from './models/init-models.js'
import  Sequelize  from 'sequelize'

const  sequelize = new  Sequelize(
    'Project_Site',
    'root',
    '28112021',{
        host :'34.95.239.241',
        dialect: 'mysql',
        loggging : false
    });
const  db = initdb(sequelize);
export default db;

