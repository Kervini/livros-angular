export class Livro {
    codigo: number = 0;
    codEditora: number = 0;
    titulo: string = "";
    resumo: string = "";
    autores: string[] = [];
    
    /*constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]){
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
    }*/

    public setCodigo(codigo: number){
        this.codigo = codigo;
    }
}
