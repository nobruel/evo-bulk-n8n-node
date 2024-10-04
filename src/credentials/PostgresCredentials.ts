import {
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class PostgresCredentials implements ICredentialType {
    name = 'PostgresCredentials';
    displayName = 'Postgres Credentials';
    properties: INodeProperties[] = [
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
