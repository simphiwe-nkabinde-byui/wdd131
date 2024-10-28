const input = document.querySelector("input");
const addChapterbutton = document.querySelector("#addChapter");
const list = document.querySelector("#list");
let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => displayList(chapter));

addChapterbutton.addEventListener("click", function() {
    if (input.value.trim() === "") {
        input.focus();
        return
    }
    displayList(input.value)
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
})

function displayList(item) {

    const li = document.createElement("li");
    li.textContent = item;

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "❌";
    deletebutton.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent)
        input.focus();
    })
    li.append(deletebutton);

    list.append(li);
}

function setChapterList() {
    localStorage.setItem("chapterList", JSON.stringify(chaptersArray))
}
function getChaptersList() {
    const jsonList = localStorage.getItem("chapterList");
    return JSON.parse(jsonList);
}
function deleteChapter(item) {
    const chapterToDelete = item.slice(0, item.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapterToDelete );
    setChapterList()
}



