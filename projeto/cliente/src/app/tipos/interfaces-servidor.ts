import { Filme } from '../filme';
import { Usuario } from '../usuario';

export class RespostaServidorFilmes {
    houveErro:              boolean;
    mensagemErro:           string;
    totalFilmesEncontrados: number;
    filmes:                 Filme[] ;
}

export class RespGetById {
  houveErro:    boolean;
  mensagemErro: string;
  filme:       Filme;
}

export class RespPutFilme {
  houveErro: boolean;
  mensagemErro: string;
}

export class RespPostFilme {
  houveErro: boolean;
  mensagemErro: string;
  filme: Filme;
}

export class RespDelFilme {
  houveErro: boolean;
  mensagemErro: string;
}
/*
Interfaces sobre críticas
*/
export class RespDelCritica {
  houveErro:    boolean;
  mensagemErro: String;
  filme:        Filme;
}




/*
*   Interfaces relacionadas a usuários
*/


export class RespPostUsuario {
  houveErro: boolean;
  mensagemErro: string;
}

export class RespDelUsuario {
  houveErro: boolean;
  mensagemErro: string;
}

export class RespPostAutenticacao {
  houveErro:    boolean;
  mensagemErro: string;
  usuario:      Usuario;
}
