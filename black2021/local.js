const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let data = {
        name,
        email,
    }
    let convertData =JSON.stringify(data);
    localStorage.setItem("lead", convertData);
    let content = document.getElementById('content')
  let pronto = `<p style="width: 260px;
  margin: 0 auto;">Seu email foi cadastrado!</p>`
  setTimeout(() => {
    content.innerHTML = pronto
  }, 500)
})


 