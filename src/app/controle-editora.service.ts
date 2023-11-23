import { Injectable } from '@angular/core';
import { Editora } from './editora';

const editorasJson = '[{"codEditora":0,"nome":"Alta books"},{"codEditora":1,"nome":"Novatec Editora"},{"codEditora":2,"nome":"Benvirá"}]';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  private editoras: Array<Editora>;
  constructor() { this.editoras = JSON.parse(editorasJson);}

  public getEditoras() {
    return this.editoras;
  }

  public getNomeEditora(codEditora: number) {
    const itens = this.editoras.filter((editora) => (editora.codEditora === codEditora));
    const item = itens.pop();

    return item?.nome;
  }
}
