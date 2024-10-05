"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresToEvolutionApi = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const pg_1 = require("pg"); // Importar o cliente 'pg' para PostgreSQL
class PostgresToEvolutionApi {
    constructor() {
        this.description = {
            displayName: 'Postgres to Evolution API',
            name: 'postgresToEvolutionApi',
            group: ['transform'],
            version: 1,
            icon: 'file:logo-bulk-message.png',
            description: 'Query PostgreSQL and send message to Evolution API',
            defaults: {
                name: 'PostgresToEvolutionApi',
                color: '#1F72E6',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: "postgresCredentials",
                    required: false
                },
                {
                    name: "evolutionApiCredentials",
                    required: false
                }
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
        const credentialsPostgres = await this.getCredentials('postgresCredentials');
        const credentialsEvolution = await this.getCredentials('evolutionApiCredentials');
        // Casting dos valores obtidos nas credenciais para os tipos corretos
        const postgresUser = credentialsPostgres.user;
        const postgresHost = credentialsPostgres.host;
        const postgresDatabase = credentialsPostgres.database;
        const postgresPassword = credentialsPostgres.password;
        const postgresPort = credentialsPostgres.port ? parseInt(credentialsPostgres.port, 10) : 5432; // Converte para número
        // Configuração do cliente PostgreSQL
        const client = new pg_1.Client({
            user: postgresUser,
            host: postgresHost,
            database: postgresDatabase,
            password: postgresPassword,
            port: postgresPort,
        });
        await client.connect(); // Conectar ao banco
        // Executar a query que lista todas as tabelas
        const query = `SELECT table_name FROM information_schema.tables WHERE table_schema='public';`;
        let tables;
        try {
            const result = await client.query(query);
            tables = result.rows;
        }
        catch (error) {
            if (error instanceof Error) {
                throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Error fetching tables: ${error.message}`);
            }
            else {
                throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Unknown error fetching tables`);
            }
        }
        finally {
            await client.end(); // Fechar a conexão
        }
        // Lógica da API Evolution
        const apiUrl = `${credentialsEvolution.host}/${credentialsEvolution.instance}/post-endpoint`;
        const apiKey = credentialsEvolution.apikey;
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        };
        // const response = await this.helpers.request(apiUrl, options);
        const response = {
            message: 'Mensagem enviada para Evolution API',
            tables, // Listar as tabelas
        };
        // Retornar a resposta em formato JSON
        return [this.helpers.returnJsonArray({ response })];
    }
}
exports.PostgresToEvolutionApi = PostgresToEvolutionApi;
