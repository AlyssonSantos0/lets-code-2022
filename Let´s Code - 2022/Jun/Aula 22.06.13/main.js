let btn_add_tarefa = document.querySelector('#btn_add');
let input_tarefa = document.querySelector('#task_insert')
let div_painel = document.querySelector('#painel')

let indice = 0;

function insere_tarefa(tarefa, index) {
    let div_tarefa =  document.createElement('div')
    div_tarefa.innerHTML = `<div class="card" data-indice=${index}>
                <div class="container">
                    <div class="card-body">
                        <div class="row"> 
                            <div class="col-xl-10">
                                    <div class="form-check">
                                        <h5>
                                            <input type="checkbox" class="form-check-input" id="teste">
                                                ${tarefa}
                                        </h5>
                                    </div>
                                </div>
                            <div class="col-xl-2">
                                <button class="btn btn-dark col-12" id="btn_del" data-indice=${index}>
                                    Excluir
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>`

    div_painel.appendChild(div_tarefa)

    
}




btn_add_tarefa.addEventListener('click', function(event){
    let conteudo_tarefa = input_tarefa.value

    if (conteudo_tarefa.trim()  === ''){
        alert("Digite a sua tarefa!")
    }else{
        insere_tarefa(conteudo_tarefa, indice++)
        console.log("não sou vazio e fui clicado");
    }

    input_tarefa.value =  '';
    
})

div_painel.addEventListener('click', function(event){
    evt = event.target
    if (evt.type === 'checkbox') {
        evt.parentNode.classList.toggle('riscado');
        console.log('Checkbox Clicado');
    }
    if (evt.type === 'button') {
        console.log(evt.dataset.indice);
        console.log(div_painel.querySelector(`[data-indice="${sequencia}"]`).parentNode);
        console.log(evt);
        console.log('Button Clicado');
    }
})