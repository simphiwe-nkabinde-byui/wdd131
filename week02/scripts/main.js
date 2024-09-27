const input = document.querySelector("input");
const addChapterbutton = document.querySelector("#addChapter");
const list = document.querySelector("#list")

addChapterbutton.addEventListener("click", function() {
    if (input.value.trim() === "") {
        input.focus();
        return
    }
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "❌";
    const li = document.createElement("li");
    li.textContent = input.value;
    li.append(deletebutton);
    list.append(li);
    input.value = "";

    deletebutton.addEventListener("click", function() {
        list.removeChild(li);
        input.focus();
    })
})



