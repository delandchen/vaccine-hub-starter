const app = require('./app');
const { PORT } = require('./config.js')

app.listen(PORT, () => {
    console.log("listening on port 3000...")
});