const container = document.querySelector(".main_container") // what I am going to be generatign the grids into
const button = document.querySelector("button")

function generate_divs(num) {
  for (i = 0; i < num; i++) {
    div = document.createElement("div")
    div.style["display"] = "flex"
    div.style["flex-direction"] = "column"
    div.style["height"] = "100vh"
    div.style["width"] = "100%"
    div.style["margin-right"] = "0px"
    for (j = 0; j < num; j++) {
      smol_div = document.createElement("div")
      smol_div.classList.add("square")
      div.appendChild(smol_div)
    }
    container.appendChild(div)
  }
  const squares = document.querySelectorAll(".square")
  console.log(squares)
  squares.forEach((square) => {
    square.addEventListener("mouseover", function (event) {
      event.target.style["background-color"] = "#3d3535"
    })
  })
}

button.addEventListener("click", () => {
  console.log("clearing")
  reset(prompt("how many square per side?"))
})

function reset(num) {
  let count = container.childElementCount
  for (i = 0; i < count; i++) {
    let child = container.lastElementChild
    while (child) {
      container.removeChild(child)
      child = container.lastElementChild
    }
  }
  generate_divs(num)
}

generate_divs(16)
