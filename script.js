let cont = document.querySelector(".container");
const editBtn = document.querySelector(".edit-btn");
let squares = 16;
// Plus Sign to parse String to Number
let num = 100 / squares;
for (let i = 0; i < +squares * +squares; i++) {
  const item = document.createElement("div");
  item.classList.add("grid-item");
  item.innerText = "";
  item.style.flexBasis = `${num}%`;
  cont.append(item);
}
editBtn.addEventListener("click", () => {
  editBtn.blur();
  squares = prompt("Enter The Number of Squares per side:", "2-50");
  cont.replaceChildren();
  if (isNaN(squares)||squares > 50||squares < 2){
    alert("You Entered False Number => Default Value: 16");
    squares = 16;
  }
  num = 100 / +squares;
  for (let i = 0; i < +squares * +squares; i++) {
    const item = document.createElement("div");
    item.classList.add("grid-item");
    item.innerText = "";
    item.style.flexBasis = `${num}%`;
    cont.append(item);
    sizePara.textContent = `${squares} X ${squares}`;
  }
  const items = document.querySelectorAll(".grid-item");
  items.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = getMyColor();
    });
  });
});
const getMyColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};
const items = document.querySelectorAll(".grid-item");
items.forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = getMyColor();
  });
});
const main = document.querySelector("main");
let sizePara = document.createElement("p");
sizePara.textContent = `${squares} X ${squares}`;
sizePara.style.fontSize = "2em"
main.appendChild(sizePara);