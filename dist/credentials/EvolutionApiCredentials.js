"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionApiCredentials = void 0;
class EvolutionApiCredentials {
    constructor() {
        this.name = 'EvolutionApiCredentials';
        this.displayName = 'Evolution API Credentials';
        this.properties = [
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
}
exports.EvolutionApiCredentials = EvolutionApiCredentials;
