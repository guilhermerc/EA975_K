var frisby = require('frisby');

// Envia cookie de autenticacao
frisby.globalSetup({
    request: {
        headers: {
            'Cookie': 'autenticacaoUsuario={"key":"secret", "role":"moderador"}',
        }
    }
})

const Joi = frisby.Joi; // Frisby exposes Joi for convenience

// API do frisby.Joi: https://github.com/hapijs/joi/blob/master/API.md#anyallowvalues
// https://www.frisbyjs.com/expectations-assertions.html
// https://www.npmjs.com/package/frisby

// @@
describe("4) Busca simples por filme", function() {

    it('Usuário faz busca por título: \"O Rei Leão\"', function(TF0) {
        frisby.get('http://localhost:3000/filmes/titulo/O Rei Leão')
        .expect('status', 200)
        .expect('header', 'Content-Type', new RegExp('[applicationTFjson].*'))
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
        .done(TF0);
    });

    it('Usuário faz busca por diretor: \"Jon Favreau\"', function(TF1) {
        frisby.get('http://localhost:3000/filmes/diretores/Jon Favreau')
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
        .done(TF1);
    });

    it('Usuário faz busca por ano: \"2019\"', function(TF2) {
        frisby.get('http://localhost:3000/filmes/ano/2019')
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
        .done(TF2);
    });

    it('Usuário faz busca por ator: \"Keegan-Michael Key\"', function(TF3) {
        frisby.get('http://localhost:3000/filmes/elenco/Keegan-Michael Key')
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
        .done(TF3);
    });

});

describe("6) Editar informações sobre um filme", function() {

    it('Moderador faz busca por título: \"O Rei Leão\"', function(TF4) {
        frisby.get('http://localhost:3000/filmes/titulo/O Rei Leão')
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
        .done(TF4);
    });

    it('Moderador clica sobre o filme para exibir suas informações', function(TF5) {
        frisby.get('http://localhost:3000/filmes/id/0001')
        .expect('status', 200)
        .expect('header', 'Content-Type', new RegExp('[application/json].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF5);
    });

    it('Moderador digita novo título, novos diretores, novo ano, novo elenco, nova sinopse e solicita a edição', function(TF6) {
        frisby.put('http://localhost:3000/filmes/id/0001', {
            titulo:     "The Lion King",
            diretores:  [
                {
                    nome:   "Roger Allers"
                },
                {
                    nome:   "Rob Minkoff"
                }
            ],
            ano:        1994,
            elenco:     [
                {
                    nome:   "Matthew Broderick"
                },
                {
                    nome:   "Jeremy Irons"
                },
                {
                    nome:   "James Earl Jones"
                }
            ],
            sinopse:    " A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities."
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:      Joi.boolean().required(),
            mensagemErro:   Joi.string().allow("").required()
        })
        .done(TF6);
    });

});

describe("7) Editar opinião sobre um filme", function() {

    it('Usuário faz busca por título: \"The Lion King\"', function(TF7) {
        frisby.get('http://localhost:3000/filmes/titulo/The Lion King')
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
        .done(TF7);
    });

    it('Usuário clica sobre o filme para exibir suas informações', function(TF8) {
        frisby.get('http://localhost:3000/filmes/id/0001')
        .expect('status', 200)
        .expect('header', 'Content-Type', new RegExp('[application/json].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF8);
    });

    it('Usuário opina', function(TF9) {
        frisby.post('http://localhost:3000/filmes/id/0001/criticas', {
            username:   "guilhermerc",
            data:       "10/07/2019",
            comentario: "Um filme mediano, esperava mais dos diretores.",
            nota:       6
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF9);
    });

    it('Usuário altera a opinião', function(TF10) {
        frisby.put('http://localhost:3000/filmes/id/0001/criticas', {
            username:   "guilhermerc",
            data:       "10/07/2019",
            comentario: "É, pensando bem foi a culpa é do elenco.",
            nota:       8
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF10);
    });

});


describe("A) Exibir informações sobre um filme", function() {

    it('Usuário faz busca por título: \"The Lion King\"', function(TF11) {
        frisby.get('http://localhost:3000/filmes/titulo/The Lion King')
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
        .done(TF11);
    });

    it('Usuário clica sobre o filme para exibir suas informações', function(TF12) {
        frisby.get('http://localhost:3000/filmes/id/0001')
        .expect('status', 200)
        .expect('header', 'Content-Type', new RegExp('[application/json].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF12);
    });

});

describe("B) Inserção de um filme", function() {

    it('Moderador insere filme', function(TF13) {
        frisby.post('http://localhost:3000/filmes', {
            titulo:     "The Lion King 2: Simba's Pride",
            diretores:  [
                {
                    nome:   "Darrell Rooney"
                },
                {
                    nome:   "Rob LaDuca"
                }
            ],
            ano:        1998,
            elenco:     [
                {
                    nome:   "Matthew Broderick"
                },
                {
                    nome:   "Neve Campbell"
                },
                {
                    nome:   "Andy Dick"
                }
            ],
            sinopse:    " Simba's daughter is the key to a resolution of a bitter feud between Simba's pride and the outcast pride led by the mate of Scar."
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF13);
    });

});

describe("C) Opinar sobre um filme", function() {

    it('Usuário faz busca por título: \"The Lion King\"', function(TF14) {
        frisby.get('http://localhost:3000/filmes/titulo/The Lion King')
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
        .done(TF14);
    });

    it('Usuário clica sobre o filme para exibir suas informações', function(TF15) {
        frisby.get('http://localhost:3000/filmes/id/0001')
        .expect('status', 200)
        .expect('header', 'Content-Type', new RegExp('[application/json].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF15);
    });

    it('Usuário opina', function(TF16) {
        frisby.post('http://localhost:3000/filmes/id/0001/criticas', {
            username:   "guilhermerc",
            data:       "10/07/2019",
            comentario: "Um filme mediano, esperava mais do diretor.",
            nota:       6
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF16);
    });

});


describe("D) Remover opinião sobre filme", function() {

    it('Usuário faz busca por título: \"The Lion King\"', function(TF17) {
        frisby.get('http://localhost:3000/filmes/titulo/The Lion King')
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
        .done(TF17);
    });

    it('Usuário clica sobre o filme para exibir suas informações', function(TF18) {
        frisby.get('http://localhost:3000/filmes/id/0001')
        .expect('status', 200)
        .expect('header', 'Content-Type', new RegExp('[application/json].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF18);
    });

    it('Usuário opina', function(TF19) {
        frisby.post('http://localhost:3000/filmes/id/0001/criticas', {
            username:   "guilhermerc",
            data:       "10/07/2019",
            comentario: "Um filme mediano, esperava mais do diretor.",
            nota:       6
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            filme:                  {
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
            }
        })
        .done(TF19);
    });

    it('Usuário deleta a opinião', function(TF20) {
        frisby.delete('http://localhost:3000/filmes/id/0001/criticas/guilhermerc')
            .expect('status', 200)
            .expect('jsonTypes', {
                houveErro:              Joi.boolean().required(),
                mensagemErro:           Joi.string().allow("").required(),
                filme:                  {
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
                }
            })
        .done(TF20);
    });

});

describe("E) Remoção de um filme", function() {

    it('Moderador deleta um filme', function(TF21) {
        frisby.delete('http://localhost:3000/filmes/id/0001')
            .expect('status', 200)
            .expect('jsonTypes', {
                houveErro:              Joi.boolean().required(),
                mensagemErro:           Joi.string().allow("").required()
            })
        .done(TF21);
    });

});

describe("1 Editar informações do usuario", function() {
    
    it("Usuário se cadastra", function(TF22) {
        frisby.post('http://localhost:3000/usuarios',{
            login: {
                username: "Thor",
                senha: "Mjolnir"
            },
            nome: "Thor",
            dataNascimento: "04/15/1901",
            sexo: "masculino",
            moderador: false            
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }
        })
        .done(TF22);
    });
    
    it("Usuário se autentica", function(TF23){
        frisby.post('http://localhost:3000/usuarios/autenticacao', {
            login: {
                username: "Thor",
                senha: "Mjolnir"
            }
        })
        .expect('status', 200)
        .expect('header', 'Set-Cookie', new RegExp('[autenticacaoUsuario].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }            
        })
        .done(TF23)
    });
    
    it("Usuário tenta modificar sua senha e nome", function(TF24){
        frisby.put('http://localhost:3000/usuarios/username/Thor', {
            login: {
                username: "Thor",
                senha: "odin"
            },
            nome: "Odinson"            
        })
        .expect('status', 200)
        .expect('header', 'Content-Type', new RegExp('[autenticacaoUsuario].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
        })
        .done(TF24)
    });
    
});

describe("2 Autenticar", function() {
    
    it("Usuário se cadastra com username: CapAmerica e senha: i cam do this all day", function(TF25) {
        frisby.post('http://localhost:3000/usuarios',{
            login: {
                username: "CapAmerica",
                senha: "i can do this all day"
            },
            nome: "Steve Rogers",
            dataNascimento: "04/15/1901",
            sexo: "masculino",
            moderador: false            
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }
        })
        .done(TF25);
    });
    
    it("Usuário se autentica", function(TF26){
        frisby.post('http://localhost:3000/usuarios/autenticacao', {
            login: {
                username: "CapAmerica",
                senha: "i can do this all day",
            }
        })
        .expect('status', 200)
        .expect('header', 'Set-Cookie', new RegExp('[autenticacaoUsuario].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }            
        })
        .done(TF26)
    });
});


describe("5 Cadastrar", function() {
    
    it("Usuário entra com suas informações e se cadastra", function(TF27) {
        frisby.post('http://localhost:3000/usuarios',{
            login: {
                username: "IronMan",
                senha: "iamironman"
            },
            nome: "Tony Stark",
            dataNascimento: "02/21/1978",
            sexo: "masculino",
            moderador: false            
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }
        })
        .done(TF27);
    });            
});

describe("8 Encerrar sessão", function() {
    
    it("Usuário se cadastra", function(TF28) {
        frisby.post('http://localhost:3000/usuarios',{
            login: {
                username: "StarLord",
                senha: "hookDownAfeeling"
            },
            nome: "Peter Quill",
            dataNascimento: "04/15/1989",
            sexo: "masculino",
            moderador: false            
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }
        })
        .done(TF28);
    });
    
    it("Usuário se autentica", function(TF29){
        frisby.post('http://localhost:3000/usuarios/autenticacao', {
            login: {
                username: "StarLord",
                senha: "hookDownAfeeling"
            }
        })
        .expect('status', 200)
        .expect('header', 'Set-Cookie', new RegExp('[autenticacaoUsuario].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }            
        })
        .done(TF29)
    });
    
    it("Usuário encerra a sessão", function(T30) {
        frisby.delete('http://localhost:3000/usuarios/autenticacao')
        .expect('status', 200)
        .expect('header', 'Set-Cookie', new RegExp('[autenticacaoUsuario].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
        })
        .done(T30)
    });
});

describe("9 consultar informações de conta", function(T31) {
   
    it("Usuário se cadastra", function(TF32) {
        frisby.post('http://localhost:3000/usuarios',{
            login: {
                username: "Hulk",
                senha: "smash"
            },
            nome: "Bruce Banner",
            dataNascimento: "08/23/1978",
            sexo: "masculino",
            moderador: false            
        })
        .expect('status', 200)
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }
        })
        .done(TF32);
    });
    
    it("Usuário se autentica", function(TF33){
        frisby.post('http://localhost:3000/usuarios/autenticacao', {
            login: {
                username: "Hulk",
                senha: "smash"
            }
        })
        .expect('status', 200)
        .expect('header', 'Set-Cookie', new RegExp('[autenticacaoUsuario].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }            
        })
        .done(TF33)
    });
    
    it("Usuário consulta suas informações", function(TF34) {
        frisby.get('http://localhost:3000/usuarios/username/Hulk')
        .expect('status', 200)
        .expect('header', 'Content-Type', new RegExp('[autenticacaoUsuario].*'))
        .expect('jsonTypes', {
            houveErro:              Joi.boolean().required(),
            mensagemErro:           Joi.string().allow("").required(),
            usuario:                {
                login:                  {
                    username:               Joi.string().required(),
                    senha:                  Joi.string().required(),
                },
                nome:               Joi.string().required(),
                dataNascimento:     Joi.string().required(),
                sexo:               Joi.string().required(),
                moderador:          Joi.boolean().required()
            }
        })
        .done(TF34)
    });
});
// describe("8 Encerrar sessão", function() {
//    
//     it("Usuário clica no botão de sair e encerra a sessão", function(T23) {
//         frisby.delete('http://localhost:3000/usuarios/autenticacao')
//         .expect('status', 200)
//         .expect('jsonTypes', {
//             houveErro:              Joi.boolean().required(),
//             mensagemErro:           Joi.string().allow("").required(),
//         })
//     });
// });

// describe("1") "Editar informações de conta", function() {
//     
//     it()
// }
