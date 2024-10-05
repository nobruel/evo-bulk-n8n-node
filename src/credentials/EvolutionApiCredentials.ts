import {
    IAuthenticateGeneric,
    ICredentialType,
    INodeProperties,
    ICredentialTestRequest,
} from 'n8n-workflow';

export class EvolutionApiCredentials implements ICredentialType {
    name = 'EvolutionApiCredentials';
    displayName = 'Evolution API Credentials';
    documentationUrl = 'https://docs.evolutionapi.com';
    properties: INodeProperties[] = [
        {
            displayName: 'API URL',
            name: 'apiUrl',
            type: 'string',
            default: '',
            required: true,
        },
        {
            displayName: 'Instance',
            name: 'instance',
            type: 'string',
            default: '',
            required: true,
        },
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: {
                password: true,
            },
            default: '',
            required: true,
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                apikey: '={{$credentials.apikey}}', 
            },
        },
    };

    // Adicionando o método de teste de credenciais
    test: ICredentialTestRequest = {
        request: {
            baseURL: '={{$credentials["apiUrl"].startsWith("http") ? $credentials["apiUrl"] : "https://" + $credentials["apiUrl"]}}',
            url: '/instance/fetchInstances', // Pode ajustar para o endpoint correto de teste
            method: 'GET',
            headers: {
                apikey: '={{$credentials.apikey}}',
            },
        },
    };
}
