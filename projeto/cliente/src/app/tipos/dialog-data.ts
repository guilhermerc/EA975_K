import { Critica } from './critica';
import { Usuario } from '../usuario';
import { Filme } from '../filme';

export interface DialogData {
  filme: Filme;
  usuario: Usuario;
  critica: Critica;
}
