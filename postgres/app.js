const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// Configuração do pool de conexão com o PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "rc-piscina.co5uocrswzze.us-east-2.rds.amazonaws.com",
  database: "rcpiscina",
  password: "root1234",
  port: 5432,
  ssl: {
            rejectUnauthorized: false
        }
});

pool.connect((error) => {
    if (error) {
        console.log(error)
        return;
    }
    console.log('conectado')
})

// lista do categorias

app.get('/listaCategorias', async (req, res) => {
  try {
    const result = await pool.query('SELECT categoria, subcategoria1, subcategoria2 FROM productos');

    const listaCategorias = {};

    result.rows.forEach((row) => {
      const categoria = row.categoria;
      const subcategoria1 = row.subcategoria1;
      const subcategoria2 = row.subcategoria2;

      if (!listaCategorias[categoria]) {
        listaCategorias[categoria] = {};
      }

      if (!listaCategorias[categoria][subcategoria1]) {
        listaCategorias[categoria][subcategoria1] = [];
      }

      // Adiciona subcategoria2 apenas se não estiver presente
      if (!listaCategorias[categoria][subcategoria1].includes(subcategoria2)) {
        listaCategorias[categoria][subcategoria1].push(subcategoria2);
      }
    });

    res.json(listaCategorias);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get("/productos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    const produtos = result.rows;
    res.json(produtos);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

app.get("/categorias", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT DISTINCT ON (categoria) * 
      FROM productos 
      ORDER BY categoria, id
    `);

    const produtosPorCategoria = result.rows;
    res.json(produtosPorCategoria);
  } catch (error) {
    console.error("Erro ao buscar produtos por categoria:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

/* app.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Use o id recebido na requisição para realizar a pesquisa
    const result = await pool.query(`SELECT * FROM productos WHERE id = ${id}`);

    if (result.rows.length === 0) {
      // Se nenhum registro for encontrado, retorne uma resposta adequada
      res.status(404).json({ mensagem: "Produto não encontrado" });
    } else {
      // Se encontrar, retorne o resultado
      const produto = result.rows[0];
      res.json(produto);
    }
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    res.status(500).send("Erro interno do servidor");
  }
}); */

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

