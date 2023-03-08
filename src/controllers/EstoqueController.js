const ModelEstoque = require('../models/Estoque.js');

module.exports = {

    async ListarEstoque(req, res) {
        try {
            const estoque = await ModelEstoque.findAll();
            return res.json(estoque)
        }
        catch (error) {
            console.log("Error o adicionar Estoque");
        }
    },
    async CriarEstoque(req, res) {
        try {
            const estoque = await ModelEstoque.create({
                quantidade_produto: req.body.quantidade_produto
            })
            return res.json(estoque)
        } catch {
            console.log(`Erro ao cadastrar estoque`)
        }
    },
    async ListarEstoqueUnico(req, res) {
        try {
            const id = req.params.id
            const estoque = await ModelEstoque.findByPk(id);
            return res.json(estoque)
        }
        catch (error) {
            console.log(error + `Erro ao encontrar Estoque de id ${id}`)
        }
    },
    async EditarEstoque(req, res) {
        try {
            const id = req.params.id
            await ModelEstoque.update({
                quantidade_produto: req.body.quantidade_produto
            }, {
                where: {
                    id_Estoque: id
                }
            })
            const estoque = await ModelEstoque.findByPk(id)
            return res.json(estoque)
        }
        catch (error) {
            console.log(error + `Erro ao dar update no Estoque de id: ${id}`)
        }
    },
    async DeletarEstoque(req, res) {
        try {
            const id = req.params.id
            await ModelEstoque.destroy({
                where: {
                    id_Estoque: id
                }
            })
            return res.send("Estoque deletado com sucesso")
        }
        catch (error) {
            console.log(error + `Erro ao deletar funcionário`)
        }
    }
}


