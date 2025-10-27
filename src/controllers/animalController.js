import * as AnimalModel from './../models/animalModel.js' 

export const listarTodos = async ( req, res) => {
    try {
        const animais = await AnimalModel.findAll();

        if ( !animais || animais.length === 0) {
            res.sttus(404).json({
                total: animais.length,
                mensagem: 'Não ha animais na Lista',
                animais
            })
        }

        res.status(200).json({
            total: animais.length,
            mensagem: 'Lista de animais',
            animais
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500 
        })
    }
}

export const listarUm = async (req, res) => {
    try {
        const id = req.params.id;
        const animal = await AnimalModel.findById(id);

        if (!animal) {
            return res.status(404).json({
                erro: 'animal não encomtrado!',
                mensagem: 'Verifique se o id do animal existe',
                id: id 
            })
        }

        res.status(200).json({
            mensagem: 'animal encontrado!',
            animal
        })

       
    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar animal por id',
            detalhes: error.message
        })
    }
}

export const criar = async (req, res) => {
    try {

        const { nome, idade, especie, dono } = req.body
        
        const dado = req.body

        // Validação 
        const camposObrigatorios = ['nome', 'idade', 'especie', 'dono'];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }

        const novoanimal = await animalModel.create(dado);

        res.status(201).json({
            mensagem: 'animal criado com sucesso!',
            animal: novoanimal
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar animal',
            detalhes: error.message
        })
    }
}

export const apagar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const animalExiste = await AnimalModel.findById(id);

        if (!animalExiste) {
            return res.status(404).json({
                erro: 'animal não encontrado com esse id',
                id: id
            })
        }

        await animalModel.deleteAnimal(id)

        res.status(200).json({
            mensagem: 'animal removido com sucesso!',
            animalRemovido: animalExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: "Erro ao apagar animal!",
            detalhes: error.message
        })
    }
}

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const animalExiste = await AnimalModel.findById(id);

        if (!animalExiste) {
            return res.status(404).json({
                erro: 'animal não encontrado com esse id',
                id: id
            })
        }

       
        const animalAtualizado = await AnimalModel.update(id, dados);

        res.status(200).json({
            mensagem: 'animal atualizado com sucesso',
            animal: animalAtualizado
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar animal',
            detalhes: error.message
        })
    }
}