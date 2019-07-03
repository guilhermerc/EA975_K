export class Filme {
	id: String;
	titulo: String;
  ano: Number;
	diretor: String;
	elenco: String;
  criticas: {username: string, data: string, comentario: string, nota: Number}[];
	imagens: string[];
	sinopse: string;
}
