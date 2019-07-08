export class Filme {
	id: 			string;
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
