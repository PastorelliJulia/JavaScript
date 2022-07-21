var linhas = document.querySelectorAll("tr");

linhas.forEach((linha) => {
    let temp = document.querySelector("td");
    if(temp != null) {
        console.log(temp.innerHTML);
    }
})