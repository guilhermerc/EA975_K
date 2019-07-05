export class Filme {
	id: 			number;
	titulo: 	string;
  ano: 			number;
	diretores: 	 {
		nome: 	string
	}[];
	elenco: {
		nome: 	string
	}[];
  criticas: {
		username: string,
		data: string,
		comentario: string,
		nota: Number
	}[];
	sinopse: string;
	imagens?: string[];
}
