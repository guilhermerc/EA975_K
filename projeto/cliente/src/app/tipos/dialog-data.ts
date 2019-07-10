import { Usuario } from '../usuario';
import { Filme, Critica } from '../filme';

export interface DialogData {
  filme: Filme;
  usuario: Usuario;
  critica: Critica;
}
