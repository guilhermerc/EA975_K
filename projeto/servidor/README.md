#### Tabela correlacionando URL do recurso, requisição HTTP e funcionalidade

##### Base de dados: filmes 

| URL do recurso                | Req. HTTP     | Funcionalidade                                        |
| ---                           | ---           | ---                                                   |
| '/filmes'                     | GET           | Lista todos os filmes                                 |
| '/filmes/id/:id'              | GET           | Retorna informações sobre o filme de id ':id'         |
| '/filmes/titulo/:titulo'      | GET           | Filtra lista de filmes por título ':titulo'           |
| '/filmes/diretores/:diretor'  | GET           | Filtra lista de filmes pelo diretor ':diretor'        |
| '/filmes/ano/:ano'            | GET           | Filtra lista de filmes pelo ano 'ano'                 |
| '/filmes/elenco/:nome'        | GET           | Filtra lista de filmes pelo ator ':nome'              |
| '/filmes/id/:id/comentario'   | POST          | Adiciona novo comentário ao filme de id ':id'         |


##### Base de dados: usuarios 

| URL do recurso                | Req. HTTP     | Funcionalidade                                        |
| ---                           | ---           | ---                                                   |
