import connection from "./connection";

const criarTabelaUsers = async () => {
    try {
        await connection.raw(`
            CREATE TABLE IF NOT EXISTS labecommerce_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
            );
        `)

        console.log("Tabela labecommerce_users criada com sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela labecommerce_users.")
        console.log(error.sqlMessage)
    }
}

// async function popularTabelaProdutos() {
//     try {
//         await connection.raw(`
//             INSERT INTO Produtos (id, nome, preco, categoria)
//             VALUES 
//             (1, "Chinelo", 19.99, "calçados"),
//             (2, "Relógio", 30.00, "acessórios"),
//             (3, "Boné", 25.00, "acessórios"),
//             (4, "Camiseta", 49.99, "roupas"),
//             (5, "Calça", 99.00, "roupas");
//         `)
        
//         console.log("Tabela Produtos populada com sucesso.")
//     } catch (error) {
//         console.log("Erro ao popular tabela Produtos.")
//         console.log(error.sqlMessage)
//     }
// }

criarTabelaUsers()
// .then(() => popularTabelaProdutos())
// .finally(() => process.exit())