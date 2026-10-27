let turma = [];

function listarAluno(){
    Interface.listar(turma);
}

function botaoSalvar(){
  let a =  Interface.salvar(turma);
  turma.push(a);
}

function cadastroAluno(){
    Interface.cadastrar();
}