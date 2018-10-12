const db = require('./db');
const app = require('./app');


const startApp = async () => {
    try {
      await db.sync();
      app.listen(8001, function () {
        console.log('Server listening on port', 8001);
      });
    } catch (err) {
      console.error(err);
    }
};
  
startApp();
  