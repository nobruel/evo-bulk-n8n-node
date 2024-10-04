"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresCredentials = void 0;
class PostgresCredentials {
    constructor() {
        this.name = 'PostgresCredentials';
        this.displayName = 'Postgres Credentials';
        this.properties = [
            {
                displayName: 'Host',
                name: 'host',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Port',
                name: 'port',
                type: 'number',
                default: 5432,
            },
            {
                displayName: 'User',
                name: 'user',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Password',
                name: 'password',
                type: 'string',
                default: '',
            },
            {
                displayName: 'Database',
                name: 'database',
                type: 'string',
                default: '',
            },
        ];
    }
}
exports.PostgresCredentials = PostgresCredentials;
