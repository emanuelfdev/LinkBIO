function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag image
  const image = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mmode, adicionar a imagem light
    image.setAttribute("src", "./assets/avatar emanuel light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    image.setAttribute("src", "./assets/avatar emanuel .png")
  }
 
  
}
