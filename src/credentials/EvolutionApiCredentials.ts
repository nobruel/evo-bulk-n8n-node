import {
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class EvolutionApiCredentials implements ICredentialType {
    name = 'EvolutionApiCredentials';
    displayName = 'Evolution API Credentials';
    properties: INodeProperties[] = [
        {
            displayName: 'API URL',
            name: 'apiUrl',
            type: 'string',
            default: '',
        },
        {
            displayName: 'Instance',
            name: 'instance',
            type: 'string',
            default: '',
        },
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            default: '',
        },
    ];
}
