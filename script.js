const curtidas= document.getElementById('curtidas') // pega o botão de curtidas pelo id 
curtidas.addEventListener('click', aumentarCurtidas)// quando aumentar chama a função 

// função de aumentar curtidas
function aumentarCurtidas(){
    let quantidade = document.querySelector("span")
    quantidade.textContent++
}