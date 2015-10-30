module.exports = {
    server: {
            host: '0.0.0.0',
            port: process.env.PORT || 3000
    },
    database: {
        host: '127.0.0.1',
        port: 27017,
        db: 'task'
    }
};
