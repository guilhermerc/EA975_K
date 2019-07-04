/*
    Requisição: GET
    Recursos:   '/filmes'
                '/filmes/titulo/:titulo'
                '/filmes/diretor/:diretor'
                '/filmes/elenco/:nome'
                '/filmes/ano/:ano'
                '/filmes/id/:id'
*/
var response = {
    houveErro:              Boolean,
    mensagemErro:           String,
    totalFilmesEncontrados: Number,
    filmes:                 [filmes]    // Onde [filmes] é um vetor cujos
                                        // elementos possuem o formato definido
                                        // em /models/model_filme.js
};
