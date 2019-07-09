import { Filme } from '../filme';

export class RespostaServidorFilmes {
    houveErro:              boolean;
    mensagemErro:           string;
    totalFilmesEncontrados: number;
    filmes:                 Filme[] ;
}

export class RespPostUsuario {
  houveErro: boolean;
  mensagemErro: string;
}

export class RespPutFilme {
  houveErro: boolean;
  mensagemErro: string;
}

export class RespPostFilme {
  houveErro: boolean;
  mensagemErro: string;
}

export class RespStatusFilme {
  houveErro: boolean;
  mensagemErro: string;
}
