const fs = require('fs-extra');
const path = require('path');

console.log('Setup script is running...');

//Directories structure
const directories = [
    'src/config',
    'src/controllers',
    'src/migrations',
    'src/models',
    'src/repository',
    'src/routes/v1',
    'src/seeders',
    'src/services',
    'src/utils',
];

//Basic files with Default content
const files =  {

    //Routes index.js file
    'src/routes/index.js' : `
    const express = require('express');

    const v1ApiRoutes = require('./v1/index');

    const router = express.Router();

    router.use('/v1', v1ApiRoutes);

    module.exports = router;
    `,

    //Routes v1 index.js file
    'src/routes/v1/index.js' : `
    const express = require('express');

    /**
     * here you will import your controllers, 
     * for example :-
     * const Some_Name_Of_Controller = require('../../controllers/file_name');
     * eg :- const CityController = require('../../controllers/city-controller');
     */

    const router = express.Router();

    /**
     * here you will put your routes,
     * for example:-
     * router.get('/hello', (req, res) => {
     * return res.json({message: "hello"});
     * });
     * 
     * or something like this
     * router.get('/hello', helloController.Controller_Function_Name);
     * for example:- router.post('/booking', bookingController.create);
     */

    module.exports = router;
    `,

    //Main index.js file
    'src/index.js' : `
    const express = require('express');
    const app = express();
    const { PORT } = require('./config/ServerConfig');
    const apiRoutes = require('./routes/index');

    const setupAndStartServer = () => {
        app.use('/api', apiRoutes);
        app.listen(PORT, () => {
            console.log(\`Server started on Port \${PORT}\`);
        });
    }

    setupAndStartServer();
    `,

    //ServerConfig.js
    'src/config/ServerConfig.js' : `
    const dotenv = require('dotenv');
    dotenv.config();

    module.exports = {
        PORT: process.env.PORT,
    };
    `,

    //.env file
    '.env' : 'PORT=3000',

    //config.json (if needed)
    'src/config/config.json' : JSON.stringify({
        "appName": 'Microservice app',
        "version": "1.0.0"
    }, null, 2)
};


try {
    // Get the user's project directory
    const userProjectDir = path.resolve(process.cwd(), '../..'); // Navigate up one level to the user's project

    // Create directories    
    directories.forEach(dir => {
        fs.ensureDirSync(path.join(userProjectDir, dir));
        console.log(`Created directory: ${path.join(userProjectDir, dir)}`);
    });

    // Create files with default content
    Object.keys(files).forEach(file => {
        fs.outputFileSync(path.join(userProjectDir, file), files[file]);
        console.log(`Created file: ${path.join(userProjectDir, file)}`);
    });

    console.log('MicroService Setup Completed!');
} catch (error) {
    console.error('Error during setup:', error.message);
    console.log('If the setup did not complete, please run `node setup.js` in your package folder.');
}