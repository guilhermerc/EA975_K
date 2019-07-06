#### Tabela correlacionando URL do recurso, requisição HTTP e funcionalidade

##### Base de dados: filmes

| URL do recurso                | Req. HTTP     | Funcionalidade                                        |
| ---                           | ---           | ---                                                   |
| '/filmes'                     | GET           | Lista todos os filmes                                 |
| '/filmes'                     | POST          | Acrescenta um filme na base de dados                  |
| '/filmes/id/:id'              | GET           | Retorna informações sobre o filme de id ':id'         |
| '/filmes/titulo/:titulo'      | GET           | Filtra lista de filmes por título ':titulo'           |
| '/filmes/diretores/:diretor'  | GET           | Filtra lista de filmes pelo diretor ':diretor'        |
| '/filmes/ano/:ano'            | GET           | Filtra lista de filmes pelo ano 'ano'                 |
| '/filmes/elenco/:nome'        | GET           | Filtra lista de filmes pelo ator ':nome'              |
| '/filmes/id/:id/comentario'   | POST          | Adiciona novo comentário ao filme de id ':id'         |
| '/filmes/id/:id/comentario'   | PUT           | Altera comentário já feito ao filme de id ':id'       |


| URL do recurso                | Req. HTTP     | JSON requisição                                                                                                       | JSON resposta                                                                                         |
| ---                           | ---           | ---                                                                                                                   | ---                                                                                                   |
| '/filmes'                     | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontrados": Number, "filmes": [filmes]}  |
| '/filmes'                     | POST          | {"titulo": String, "diretores": [{"nome": String}], "ano": Number, "elenco": [{"nome": String}], "sinopse": String}   | {"houveErro": Boolean, "mensagemErro"}                                                                |
| '/filmes/id/:id'              | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontrados": Number, "filmes": [filmes]}  |
| '/filmes/titulo/:titulo'      | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontr ados": Number, "filmes": [filmes]} |
| '/filmes/diretores/:diretor'  | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontrados": Number, "filmes": [filmes]}  |
| '/filmes/ano/:ano'            | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontrados": Number, "filmes": [filmes]}  |
| '/filmes/elenco/:nome'        | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontrados": Number, "filmes": [filmes]}  |
| '/filmes/id/:id/comentario'   | POST          | {"username": String, "data": String, "comentario": String, "nota": Number}                                            | {"houveErro": Boolean, "mensagemErro": String, "filme": [filme]}                                      |
| '/filmes/id/:id/comentario'   | PUT           | {"username": String, "data": String, "comentario": String, "nota": Number}                                            | {"houveErro": Boolean, "mensagemErro": String, "filme": [filme]}

##### Base de dados: usuarios

| URL do recurso                | Req. HTTP     | Funcionalidade                                        |
| ---                           | ---           | ---                                                   |
