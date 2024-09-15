const fs = require('fs-extra');
const path = require('path');

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

const setupMicroservice = () => {

    //Create directories
    directories.forEach(dir => {
        fs.ensureDirSync(path.join(process.cwd(), dir));
    });

    //Create files with Defualt content
    Object.keys(files).forEach(file => {
        fs.outputFileSync(path.join(process.cwd(), file), files[file]);
    });

    console.log('MicroService Setup Completed!');
}

module.exports = {
    setupMicroservice
}