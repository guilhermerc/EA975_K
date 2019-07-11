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
  criticas: Critica[];
	sinopse: string;
	imagens?: string[];
}

export class Critica {
    username: string;
    data: string;
    comentario: string;
    nota: Number;
}
