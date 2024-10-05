"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionApiCredentials = void 0;
class EvolutionApiCredentials {
    constructor() {
        this.name = 'EvolutionApiCredentials';
        this.displayName = 'Evolution API Credentials';
        this.documentationUrl = 'https://docs.evolutionapi.com';
        this.properties = [
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
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    apikey: '={{$credentials.apikey}}',
                },
            },
        };
        // Adicionando o método de teste de credenciais
        this.test = {
            request: {
                baseURL: '={{$credentials["apiUrl"].startsWith("http") ? $credentials["apiUrl"] : "https://" + $credentials["apiUrl"]}}',
                url: '/instance/fetchInstances',
                method: 'GET',
                headers: {
                    apikey: '={{$credentials.apikey}}',
                },
            },
        };
    }
}
exports.EvolutionApiCredentials = EvolutionApiCredentials;
