import { Component } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent {
  public editoras:Array<Editora> = [];
  public livros:Array<Livro> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivro: ControleLivrosService){}

    ngOnInit():void{
      this.editoras = this.servEditora.getEditoras();
      this.livros = this.servLivro.obterLivros();
    }

    excluir = (codigo: number) => {
      this.servLivro.excluirLivro(codigo);
      this.livros = this.servLivro.obterLivros();
    }

    obterNome = (codEditora: number) =>{
      return this.servEditora.getNomeEditora(codEditora);
    }
}
