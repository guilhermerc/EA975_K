#### Tabelas correlacionando URL do recurso, requisição HTTP, funcionalidade e JSONS de comunicação

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
| '/filmes/id/:id/criticas'     | POST          | Adiciona nova crítica ao filme de id ':id'            |
| '/filmes/id/:id/criticas'     | PUT           | Edita crítica previamente feita ao filme de id ':id'  |
| '/filmes/id/:id/criticas/:username'   | DELETE        | Deleta a crítica feita pelo usuário de username ':username' no filme de id ':id'   |


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
| '/filmes/id/:id/criticas'     | POST          | {"username": String, "data": String, "comentario": String, "nota": Number}                                            | {"houveErro": Boolean, "mensagemErro": String, "filme": [filme]}                                      |
| '/filmes/id/:id/criticas'     | PUT           | {"username": String, "data": String, "comentario": String, "nota": Number}                                            | {"houveErro": Boolean, "mensagemErro": String, "filme": [filme]}
| '/filmes/id/:id/criticas/:username'   | DELETE        | {}                                                                                                            | {"houveErro": Boolean, "mensagemErro": String, "filme": [filme]}                                      |

##### Base de dados: usuarios

| URL do recurso                 | Req. HTTP     | Funcionalidade                                                    |
| ---                            | ---           | ---                                                               |
| '/usuarios/'                   | POST          | Adiciona novo usuário a base de dados                             |
| '/usuarios/autenticacao'       | POST          | Permite que um usuário se autentique                              |
| '/usuarios/username/:username' | PUT           | Altera os dados do usuário especificado por username              |
| '/usuarios/autenticacao'       | DELETE        | Encerra a sessão do usuário                                       |
| '/usuarios/username/:username' | GET           | Retorna as informações sobre um usuário especificado por username |


| URL do recurso                | Req. HTTP     | JSON requisição                                                                                                             | JSON resposta                                        	        | 
| ---                           | ---           | ---                                                                                                                         | ---                                                             |
| '/usuarios/'                  | POST          | {{"login":{"username": String,"senha": String},"nome": String,"dataNascimento": String,"sexo": String,"moderador":Boolean}} | { "houveErro": Boolean, "mensagemErro": String}           
| '/usuarios/autenticacao       | POST          | {"login": {"username":String,"senha": String}}        
|{"houveErro": Boolean, "mensagemErro": String, "usuario": JSON do usuário}                             |
|'/usuarios/username/:username' | PUT           | JSON contendo os campos que o usuário deseja alterar  
|{"houveErro": Boolean, "mensagemErro": String}                                                         |
|'/usuarios/autenticacao'       | DELETE        | {}                                                    
|{"houveErro": Boolean, "mensagemErro": String}                                                         |
|'/usuarios/username/:username' | GET           | {}                                                    
|{"houveErro": Boolean, "mensagemErro": String, "usuario": JSON do usuário}                             |
