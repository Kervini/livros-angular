import { Injectable } from '@angular/core';
import { Livro } from './livro';

const livrosJson = '[{"codigo":0,"codEditora":0,"titulo":"Código limpo","resumo":"Código limpo: habilidades práticas do Agile software","autores":["Robert C. Martin"]},{"codigo":1,"codEditora":1,"titulo":"Como ser um Programador Melhor","resumo":"Como ser um Programador Melhor: um Manual Para Programadores que se Importam com Código","autores":["Pete Goodliffe"]},{"codigo":2,"codEditora":0,"titulo":"Use a cabeça: Java","resumo":"Use a cabeça! Java é uma experiêcia completa de apredizado","autores":["Bert Bates","Kathy Sierra"]}]';

@Injectable({
    providedIn: 'root'
})
export class ControleLivrosService {
    private livros: Array<Livro>;

    constructor() { this.livros = JSON.parse(livrosJson); }

    public obterLivros() {
        return this.livros;
    }

    public incluirLivro(livro: Livro) {
        let maior = 0;
        for (let i = 0; i < this.livros.length; i++) {
            if (this.livros[i].codigo > maior) {
                maior = this.livros[i].codigo;
            }
        }
        maior++;
        livro.setCodigo(maior);
        this.livros.push(livro);
    }

    public excluirLivro(codigo: number) {
        let indice = this.livros.findIndex((livro) => (livro.codigo == codigo));
        this.livros.splice(indice, 1);
    }
}
