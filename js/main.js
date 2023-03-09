function pinta_cartelera(){

  let cj1 = document.querySelector(".caja1");
  cj1.innerHTML = comando(data_info[0].titulo,data_info[0].mensaje);

  let cj2 = document.querySelector(".caja2");
  cj2.innerHTML = comando(data_info[1].titulo,data_info[1].mensaje);

  let cj3 = document.querySelector(".caja3");
  cj3.innerHTML = comando(data_info[2].titulo,data_info[2].mensaje);

  let cj4 = document.querySelector(".caja4");
  cj4.innerHTML = comando(data_info[3].titulo,data_info[3].mensaje);

}

pinta_cartelera();