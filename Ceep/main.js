import BotaoConclui from './components/concluirTarefa.js'
import BotaoDeleta from './components/deletaTarefa.js'
  
  const criarTarefa = (event) =>{
  event.preventDefault();
  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]')
  const valor = input.value
  console.log(valor)
  
  const tarefa = document.createElement('li')
  tarefa.classList.add('task')

  const conteudo = `<p class="content">${valor}</p>`
  tarefa.innerHTML = conteudo
  tarefa.appendChild(BotaoConclui())
  tarefa.appendChild(BotaoDeleta())
  lista.appendChild(tarefa)
  input = " "

}
const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)
 
