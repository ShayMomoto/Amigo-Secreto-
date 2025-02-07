document.addEventListener("DOMContentLoaded", function () {
    const friends = [];
    const input = document.getElementById("amigo"); 
    const list = document.getElementById("listaAmigos");
    const result = document.getElementById("resultado");
    const addButton = document.querySelector(".button-add"); 
    const pickButton = document.querySelector(".button-draw"); 

    function updateFriendList() {
        list.innerHTML = ""; 
        for (const friend of friends) {
            const listItem = document.createElement("li");
            listItem.textContent = friend;
            list.appendChild(listItem);
        }
    }

    function adicionarAmigo() {
        const name = input.value.trim();
        if (name) {
            friends.push(name);
            updateFriendList(); 
            input.value = ""; 
        }
    }

    function sortearAmigo() {
        if (friends.length > 0) {
            const randomIndex = Math.floor(Math.random() * friends.length);
            result.innerHTML = `Amigo sorteado: ${friends[randomIndex]}`;
        } else {
            result.innerHTML = "Nenhum amigo disponível para sorteio.";
        }
    }

    addButton.addEventListener("click", adicionarAmigo);
    pickButton.addEventListener("click", sortearAmigo);
});
