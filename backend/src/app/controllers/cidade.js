const cidadeModel = require('../models/cidade');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const cidades = await cidadeModel.findAll({
            limit: 20,
            offset: (page - 1) * 20,
        });

        return res.json(cidades);
    },

    async store(req, res) {
        const cidadeExiste = await cidadeModel.findOne({ where: { nome: req.body.nome } });

        if (cidadeExiste) {
            return res.status(400).json({ error: 'Cidade já cadastrada' });
        }

        const novaCidade = await cidadeModel.create(req.body);

        return res.json(novaCidade);
    },

    async update(req, res) {
        const cidadeExiste = await cidadeModel.findOne({ where: { nome: req.body.nome } });

        if (cidadeExiste) {
            return res.status(400).json({ error: 'Cidade já cadastrada' });
        }

        const { id } = req.params;

        await cidadeModel.update(req.body, {
            where: { id }
        });

        const { nome, uf } = req.body;

        return res.json({ id, nome, uf });
    },

    async delete(req, res) {
        const cidade = await cidadeModel.findByPk(req.params.id);

        await cidade.destroy();

        return res.json({ message: 'Cidade excluída com sucesso' });
    }
};