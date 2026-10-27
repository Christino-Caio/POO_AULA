class Aluno {
  #nome;
  nota1;
  nota2;
  nota3;
  estado;
  media;
  falta;
  constructor(nome, nota1, nota2, nota3) {
    this.#nome = nome;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
  }
  gerarMedia(nota1, nota2, nota3) {
    let m = (nota1 + nota2 + nota3) / 3;
    this.media = m;
    return m;
  }
  gerarEstado(media) {
    let est;
    if (media >= 6) {
      est = 'Aprovado';
    } else if (media >= 3) {
      est = 'Recuperação';
    } else {
      est = 'Reprovado';
    }
    this.estado = est;
    return est;
  }
  Faltou(falta) {
    let est;
    let fal = falta
    if (falta > 4) {
      est = 'Reprovado por falta';
      this.estado = est;
      this.falta = fal;
      return est;
    }
    
  }
  getNome(){
    return this.#nome;
  }

  setNome(nome){
    this.#nome = nome;


  }
} //fim da classe
