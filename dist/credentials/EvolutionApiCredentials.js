"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvolutionApiCredentials = void 0;
class EvolutionApiCredentials {
    constructor() {
        this.name = 'evolutionApiCredentials';
        this.displayName = 'Evolution API Credentials';
        this.properties = [
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
}
exports.EvolutionApiCredentials = EvolutionApiCredentials;
