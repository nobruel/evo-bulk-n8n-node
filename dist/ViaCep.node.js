"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViaCep = void 0;
class ViaCep {
    constructor() {
        this.description = {
            displayName: 'ViaCEP',
            name: 'viaCep',
            group: ['transform'],
            version: 1,
            description: 'Consulta CEP no serviço ViaCEP',
            defaults: {
                name: 'ViaCEP',
                color: '#1A82e2', // Cor do nó (opcional)
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'CEP',
                    name: 'cep',
                    type: 'string',
                    default: '',
                    placeholder: '01001000',
                    description: 'Informe o CEP com 8 dígitos',
                    required: true,
                },
            ],
            icon: 'file:dist/assets/logo-viacep.png', // Caminho relativo para o logo
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            const cep = this.getNodeParameter('cep', i);
            const response = await this.helpers.httpRequest({
                method: 'GET',
                url: `https://viacep.com.br/ws/${cep}/json/`,
                json: true,
            });
            returnData.push({ json: response });
        }
        return [this.helpers.returnJsonArray(returnData)];
    }
}
exports.ViaCep = ViaCep;
