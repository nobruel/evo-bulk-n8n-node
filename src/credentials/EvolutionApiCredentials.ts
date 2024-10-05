import {
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class EvolutionApiCredentials implements ICredentialType {
    name = 'evolutionApiCredentials';
    displayName = 'Evolution API Credentials';
    properties: INodeProperties[] = [
        {
            displayName: 'URL',
            name: 'host',
            type: 'string',
            default: '',
        },
        {
            displayName: 'Instance',
            name: 'instance',
            type: 'string',
            default: 5432,
        },
        {
            displayName: 'Api KEY',
            name: 'apikey',
            type: 'string',
            default: '',
        },
    ];
}
