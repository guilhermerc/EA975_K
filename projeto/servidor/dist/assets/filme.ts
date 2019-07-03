export class Filme {
	id: String;
	titulo: String;
  ano: Number;
	diretor: String;
	elenco: String;
  comentarios: {username: string, data: string, texto: string}[];
	imagens: string[];
	sinopse: string;
}
