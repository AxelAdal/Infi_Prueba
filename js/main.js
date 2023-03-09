function pinta_cartelera(){

  let cj1 = document.querySelector(".caja1");
  cj1.innerHTML = comando(data_info[0].titulo,mesaje[0].mensaje);

}

pinta_cartelera();