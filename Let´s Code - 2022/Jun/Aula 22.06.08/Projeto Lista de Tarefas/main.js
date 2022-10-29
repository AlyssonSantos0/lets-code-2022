let btn_add_tarefa = document.querySelector('#btn_add');
let input_tarefa = document.querySelector('#task_insert');
let div_painel = document.querySelector('#painel');
let teste


function insere_tarefa(tarefa) {
    let div_tarefa = document.createElement('div');
    div_tarefa.innerHTML = `<div class="card">
            <div class="container">
                <div class="card-body">
                    <div class="row"> 
                        <div class="col-xl-10">
                                <div class="form-check">
                                    <h5>
                                        <input type="checkbox" class="form-check-input id="teste">
                                            ${tarefa}
                                    </h5>
                                </div>
                            </div>
                        <div class="col-xl-2"><button class="btn btn-dark col-12" id="btn_del">Excluir</button></div>
                    </div> 
                </div>
            </div>
        </div>`

    div_painel.appendChild(div_tarefa)
}

let checkbox = document.querySelector('#teste')

checkbox.addEventListener('click', function (event){
    event.preventDefault
    checkbox.classList.toggle('riscado')
})


btn_add_tarefa.addEventListener('click', (event)=>{

    let conteudo_tarefa = input_tarefa.value;
    if (conteudo_tarefa.trim() === "") {
        alert("Digte sua tarefa!");
    }
    else{
        insere_tarefa(conteudo_tarefa)
    }
    input_tarefa.value = ''
})