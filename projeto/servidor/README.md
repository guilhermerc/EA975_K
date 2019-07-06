#### Tabela correlacionando URL do recurso, requisição HTTP e funcionalidade

| URL do recurso                | Req. HTTP     | Funcionalidade                                        |
| ---                           | ---           | ---                                                   |
| '/filmes'                     | GET           | Lista todos os filmes                                 |
| '/filmes/titulo/:titulo'      | GET           | Filtra lista de filmes por título ':titulo'           |
| '/filmes/diretores/:diretor'  | GET           | Filtra lista de filmes pelo diretor ':diretor'        |
| '/filmes/ano/:ano'            | GET           | Filtra lista de filmes pelo ano 'ano'                 |
| '/filmes/elenco/:nome'        | GET           | Filtra lista de filmes pelo ator ':nome'              |
| '/filmes/id/:id/comentario'   | POST          | Adiciona novo comentário ao filme de id ':id'         |
