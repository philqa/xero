import * as dotenv from 'dotenv';

dotenv.load();

const CONFIG = {
    environment: {}
};

const ENV_CONFIG = {
    prod: {
        baseUrl: 'https://www.xero.com.au',
        loginUrl: 'https://login.xero.com/',
        data: {
            email: 'phil@automatatech.com.au',
            username: 'phil@automatatech.com.au',
            password: 'P455W0RD!'
        }
    },
    test: {
        baseUrl: 'https://test-xero.com.au',
        loginUrl: 'https://login.test-xero.com/',
        data: {
            email: 'phil@automatatech.com.au',
            username: 'phil@automatatech.com.au',
            password: 'P455W0RD!'
        }
    },
    local: {
        baseUrl: 'https://localhost:3000',
        loginUrl: 'https://localhost:5000',
        data: {
            email: 'phil@automatatech.com.au',
            username: 'phil@automatatech.com.au',
            password: 'P455W0RD!'
        }
    }
};

export function getConfig(env: string) {
    (<any>Object).assign(CONFIG, ENV_CONFIG[env]);
    return CONFIG;
}