#### Tabela correlacionando URL do recurso, requisição HTTP e funcionalidade

##### Base de dados: filmes

| URL do recurso                | Req. HTTP     | Funcionalidade                                        |
| ---                           | ---           | ---                                                   |
| '/filmes'                     | GET           | Lista todos os filmes                                 |
| '/filmes'                     | POST          | Acrescenta um filme na base de dados                  |
| '/filmes/id/:id'              | GET           | Retorna informações sobre o filme de id ':id'         |
| '/filmes/id/:id'              | PUT           | Edita informações do filme de id ':id'                |
| '/filmes/id/:id'              | DELETE        | Deleta filme de id ':id' da base de dados             |
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
| '/filmes/id/:id'              | PUT           | JSON contendo somente os campos editados                                                                              | {"houveErro": Boolean, "mensagemErro": String}                                                        |
| '/filmes/id/:id'              | DELETE        | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String}                                                        |
| '/filmes/titulo/:titulo'      | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontrados": Number, "filmes": [filmes]}  |
| '/filmes/diretores/:diretor'  | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontrados": Number, "filmes": [filmes]}  |
| '/filmes/ano/:ano'            | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontrados": Number, "filmes": [filmes]}  |
| '/filmes/elenco/:nome'        | GET           | {}                                                                                                                    | {"houveErro": Boolean, "mensagemErro": String, "totalFilmesEncontrados": Number, "filmes": [filmes]}  |
| '/filmes/id/:id/comentario'   | POST          | {"username": String, "data": String, "comentario": String, "nota": Number}                                            | {"houveErro": Boolean, "mensagemErro": String, "filme": [filme]}                                      |
| '/filmes/id/:id/comentario'   | PUT           | {"username": String, "data": String, "comentario": String, "nota": Number}                                            | {"houveErro": Boolean, "mensagemErro": String, "filme": [filme]}

##### Base de dados: usuarios

| URL do recurso                | Req. HTTP     | Funcionalidade                                        |
| '/usuarios/'                  | POST          | Adiciona novo usuário a base de dados					  |


| URL do recurso                | Req. HTTP     | JSON requisição                                                                                                             | JSON resposta                                        	    |
| ---                           | ---           | ---                                                                                                                         | ---                                                        |
| '/usuarios/'                  | POST          | {{"login":{"username": String,"senha": String},"nome": String,"dataNascimento": String,"sexo": String,"moderador":Boolean}} | { houveErro: Boolean, mensagemErro: String} 					 |

































