exports.default = (envFile) => {
    require('dotenv').config({
        path: envFile,
    });

    return {
        allGood: true,
        env: process.env.ENV,
    };
};
