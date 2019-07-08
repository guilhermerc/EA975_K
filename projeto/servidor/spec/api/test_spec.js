var frisby = require('frisby');

// envia cookie de autenticacao
frisby.globalSetup({
    request: {
        headers: {
            'Cookie': 'userAuth={"key": "secret", "role": "admin"}',
        }
    }
})

const Joi = frisby.Joi; // Frisby exposes Joi for convenience

// API do frisby.Joi: https://github.com/hapijs/joi/blob/master/API.md#anyallowvalues
describe("Suíte de testes\n", function() {

    it('Testando o método GET em /filmes', function(FT1) {
        frisby.get('http://localhost:3000/filmes')
        .expect('status', 200)
        .expect('header', 'Content-Type', new RegExp('[application/json].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            totalFilmesEncontrados: Joi.number().required(),
            filmes:                 Joi.array().min(0).items({
                id:         Joi.string().required(),
                titulo:     Joi.string().required(),
                diretores:  Joi.array().min(0).items({
                    nome:   Joi.string().required()
                }),
                ano:        Joi.number().required(),
                elenco:     Joi.array().min(0).items({
                    nome:   Joi.string().required()
                }),
                sinopse:    Joi.string().required(),
                nota:       Joi.number().required(),
                criticas:   Joi.array().min(0).items({
                    username:   Joi.string().required(),
                    data:       Joi.string().required(),
                    comentario: Joi.string().required(),
                    nota:       Joi.number().required()
                })
            })
        })
        .done(FT1);
    });

});
