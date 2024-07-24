import { Sequelize } from 'sequelize';
import initTask from '../models/task.model'; // Importa o inicializador do modelo Task

const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost', // Substitua pelo host do seu banco de dados
  dialect: 'mysql', // Substitua pelo seu dialeto de banco de dados, se necessário
});

// Sincronize o modelo com o banco de dados (cria a tabela se não existir)
const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco de dados MySQL');

    const Task = initTask(sequelize); // Inicializa o modelo Task

    await sequelize.sync({ force: true }); // Crie a tabela se não existir, apague e recrie se 'force: true'
    console.log('Tabela "tasks" sincronizada');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

export { sequelize, syncDatabase };
