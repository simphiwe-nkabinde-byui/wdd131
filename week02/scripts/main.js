const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list")

const deletebutton = document.createElement("button");
deletebutton.textContent = "❌";

const li = document.createElement("li");
li.textContent = input.value;
li.appendCh(deletebutton);

list.append(li);

