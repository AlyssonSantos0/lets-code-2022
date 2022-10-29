let btn_add_tarefa = document.querySelector('#btn_add');
let input_tarefa = document.querySelector('#task_insert')
let div_painel = document.querySelector('#painel')


function insere_tarefa(tarefa, index) {
    let div_tarefa =  document.createElement('div')
    div_tarefa.setAttribute('data-indice', `${index}`)
    div_tarefa.innerHTML = `<div class="card">
                <div class="container" >
                    <div class="card-body">
                        <div class="row"> 
                            <div class="col-xl-10">
                                    <div class="form-check">
                                        <h5 class="texto_tarefa">
                                            <input type="checkbox" class="form-check-input">
                                                ${tarefa}
                                        </h5>
                                    </div>
                                </div>
                            <div class="col-xl-2">
                                <button type='button' data-indice=${index} class="btn btn-dark col-12" id="btn_del">
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
    console.log(div_painel.childElementCount);

    if (conteudo_tarefa.trim()  === ''){
        alert("Digite a sua tarefa!")
    }else{
        insere_tarefa(conteudo_tarefa, indice++)
        console.log("não sou vazio e fui clicado");
    }

    input_tarefa.value =  ''
    
})

// adicionando lista com enter
input_tarefa.addEventListener('keyup', function(event){
    var key = event.which || event.keyCode; // captura os valores da tecla
    let conteudo_tarefa = input_tarefa.value // guarda o que foi digitado no input para uma variável auxiliar
        
    // confere se o valor é igual à 13 (enter)
        if (key == 13) {
            insere_tarefa(conteudo_tarefa, indice++) // insere a tarefa
            input_tarefa.value =  '' // limpa o input
        } 
})



div_painel.addEventListener('click', function(event) {

    let evt_capturado = event.target

    if(evt_capturado.type === 'checkbox' && evt_capturado.id !== 'checkbox_all'){
        evt_capturado.parentNode.classList.toggle('riscado')   
        console.log("Eu sou um Checkbox e fui clicado");
    }else{
        let checkbox_marcados = document.querySelectorAll('.riscado input')
        let checkbox_nao_marcados = document.querySelectorAll('.texto_tarefa input')

        for (const tarefa of checkbox_nao_marcados) {
            tarefa.parentNode.classList.toggle('riscado')
            tarefa.setAttribute('checked', 'checked') 
        }

        // console.log(`Quantidade de Marcados: ${checkbox_marcados.length}`);
        // console.log(`Quantidade de não Marcados: ${checkbox_nao_marcados.length}`);
        // console.log(typeof(checkbox_nao_marcados));
    }
    
    if (evt_capturado.type === 'button') {
        let sequencia = evt_capturado.dataset.indice
        div_painel.querySelector(`[data-indice="${sequencia}"]`).remove()
        console.log("Eu sou um button e fui clicado");
      
    }

    
})