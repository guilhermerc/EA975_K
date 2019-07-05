import { Filme } from '../filme';

export class RespostaServidorFilmes {
    houveErro:              boolean;
    mensagemErro:           string;
    totalFilmesEncontrados: number;
    filmes:                 Filme[] ;
}
