import User from './User';
import sequelize from '../config/config';


// Define one-to-many relationship between User and Notification

// Sync models
const initializeModels = async () => {
  await sequelize.sync();
};

export { User, initializeModels };
