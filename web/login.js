function login(){
  
    var iptemail= document.querySelector("#iptEmail");
    var iptPass= document.querySelector("#iptPass");
    alert(iptemail.value);

    var body ={
        email: iptemail.value,
        senha: iptPass.value
        
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
          },     
      }

    var response = fetch('http://127.0.0.1:5000/api/login', options)
    .then(response => {
      // valida se a requisição falhou
      if (!response.ok) {
        return new Error('falhou a requisição') // cairá no catch da promise
      }

      // verificando pelo status
      if (response.status === 404) {
        return new Error('não encontrou qualquer resultado')
      }

      // retorna uma promise com os dados em JSON
      return response.json()
    });

    console.log(response);



}
