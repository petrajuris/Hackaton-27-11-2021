exports.config = {
    runner: 'local',
    specs: [
        './test/specs/**/*.e2e.js'
    ],
    exclude: [
        './test/specs/examples/**/*'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome', // firefox, MicrosoftEdge
        // port: 5555,
        acceptInsecureCerts: true
    }],
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'https://czechitas-shopizer.azurewebsites.net',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['chromedriver']
        // ['selenium-standalone', { drivers: { firefox: 'latest', chrome: true, chromiumedge: 'latest' } }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
