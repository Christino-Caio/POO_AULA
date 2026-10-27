let turma = [];
//DA AULA
function salvar() {
  let nome = document.getElementById('nome').value;
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);
  let n3 = Number(document.getElementById('n3').value);
  let a1 = new Aluno(nome, n1, n2, n3);
  let ff = Number(document.getElementById('falta').value);
  let m = a1.gerarMedia(n1, n2, n3);
  a1.gerarEstado(m);
  a1.Faltou(ff);
  turma[turma.length] = a1;
  alert('aluno cadastrado');
}
function listar() {
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');

  btnListar.classList.add('active');
  btnCadastrar.classList.remove('active');

  // Ajusta o conteúdo visível
  tabListar.classList.add('active');
  tabCadastrar.classList.remove('active');
  turma.sort((a, b) => a.nome.localeCompare(b.nome));
  let lista = '<table> <tr> <b><th>Nome</th> <th>Media</th> <th>Situação</th></b></tr>';
  for (let i = 0; i < turma.length; i++) {
    if (turma[i].falta >4){

      lista = lista + "<tr><td>" + turma[i].nome + ' </td> '+  "<td>" + turma[i].media.toFixed(2) + "</td>" +"<td>"+ turma[i].estado + "</td></tr>";
    }
    else{
      lista = lista + "<tr><td>" +  turma[i].nome + ' </td> ' +
       "<td>" + turma[i].media.toFixed(2) + "</td>" + ' </td> ' + "<td>"+ turma[i].estado + "</td></tr>" ;
    }

    
  }
  document.getElementById('alunos').innerHTML = lista;
}

function cadastrar() {
  const btnCadastrar = document.getElementById('btn-cadastrar');
  const tabCadastrar = document.getElementById('tab-cadastrar');
  const btnListar = document.getElementById('btn-listar');
  const tabListar = document.getElementById('tab-listar');

  btnListar.classList.remove('active');
  btnCadastrar.classList.add('active');

  // Ajusta o conteúdo visível
  tabListar.classList.remove('active');
  tabCadastrar.classList.add('active');
  //document.getElementById("media").innerHTML = m;
}
