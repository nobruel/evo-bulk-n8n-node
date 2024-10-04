"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresToEvolutionApi = void 0;
class PostgresToEvolutionApi {
    constructor() {
        this.description = {
            displayName: 'Postgres to Evolution API',
            name: 'postgresToEvolutionApi',
            group: ['transform'],
            version: 1,
            description: 'Query PostgreSQL and send message to Evolution API',
            defaults: {
                name: 'PostgresToEvolutionApi',
                color: '#1F72E6',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'PostgresCredentials',
                    required: true,
                },
                {
                    name: 'EvolutionApiCredentials',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'PostgreSQL Query',
                    name: 'postgresQuery',
                    type: 'string',
                    default: 'SELECT * FROM your_table_name',
                    required: true,
                    description: 'The SQL query to run on the PostgreSQL database',
                },
                {
                    displayName: 'Message for Evolution API',
                    name: 'evolutionMessage',
                    type: 'string',
                    default: 'Your message here',
                    required: true,
                },
            ],
        };
    }
    async execute() {
        const postgresQuery = this.getNodeParameter('postgresQuery', 0);
        const message = this.getNodeParameter('evolutionMessage', 0);
        const credentialsPostgres = await this.getCredentials('PostgresCredentials');
        const credentialsEvolution = await this.getCredentials('EvolutionApiCredentials');
        // Postgres query logic here
        // You can use any Postgres client, like 'pg', but n8n provides database nodes for such tasks.
        // Fetch data from the database, and use that data in the next step if necessary.
        // Evolution API call logic here
        const apiUrl = `${credentialsEvolution.apiUrl}/${credentialsEvolution.instance}/post-endpoint`;
        const apiKey = credentialsEvolution.apiKey;
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        };
        // const response = await this.helpers.request(apiUrl, options);
        const response = { author: "Bruno", resposta: "Nenhuma por enquanto" };
        // Return the response from the API
        return [this.helpers.returnJsonArray({ response })];
    }
}
exports.PostgresToEvolutionApi = PostgresToEvolutionApi;
