const { Op } = require('sequelize');

const clienteModel = require('../models/cliente');
const cidadeModel = require('../models/cidade');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const clientes = await clienteModel.findAll({
            limit: 20,
            offset: (page - 1) * 20,
        });

        return res.json(clientes);
    },

    async get(req, res) {
        const cliente = await clienteModel.findByPk(req.params.id, {
            include: [{
                model: cidadeModel,
                as: 'cidade'
            }],
        });

        return res.json(cliente);
    },

    async store(req, res) {
        const { rg, cpf } = req.body;

        const clienteExiste = await clienteModel.findOne({
            where: {
                [Op.or]: [{ rg: rg }, { cpf: cpf }]
            }
        });

        if (clienteExiste) {
            return res.status(400).json({ error: 'Cliente já existe' })
        }

        const novoCliente = await clienteModel.create(req.body);

        return res.json(novoCliente);
    },

    async update(req, res) {
        const cliente = await clienteModel.update(req.body, {
            where: { id: req.params.id }
        });

        return res.json(cliente);
    },

    async delete(req, res) {
        const cliente = await clienteModel.findByPk(req.params.id);

        await cliente.destroy();

        return res.json({ message: 'Cliente excluído com sucesso' });
    }
}