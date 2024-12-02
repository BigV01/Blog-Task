const app = require('./app');
const sequelize = require('./config/dbConfig');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err.message);
  }
})();