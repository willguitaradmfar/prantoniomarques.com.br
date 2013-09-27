var config = {
    domain: {
        host: process.env.host,
        port: ''
    },
    env: 'dev', // dev or prod
    mongodb: {
        credentials: '', // username:password@
        host: 'localhost',
        port: ':27017', // :port
        dbName: 'prantoniomarques'
    },
    twitter: {
        consumerKey: process.env.consumerKey,
        consumerSecret: process.env.consumerSecret
    },
    public: {
        blogName: 'prantoniomarques',
        blogDescription: 'prantoniomarques',
        url: {            
            site: '/',
            admin: '/admin',
            sitePartials: '/partials'
        }
    }
};

module.exports = config;
