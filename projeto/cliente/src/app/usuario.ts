export class Usuario {

//  public fotoPerfil: string?,

  constructor(
  	public login: {
                username: string,
                senha:  string
    },
    public nome: string,
  	public dataNascimento: Date,
  	public sexo: string,
    public moderador: boolean
  ){}
}
