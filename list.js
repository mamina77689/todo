const input = document.getElementsByClassName("input")[0];
const white = document.getElementsByClassName("white")[0];

function list() {
  if (input.value === "") {
    return alert("empty!");
  }
  const el = document.createElement("div");
  const text = document.createElement("div");
  text.innerHTML = input.value;
  el.appendChild(text);
  white.appendChild(el);
  input.value = "";
  el.className = "style";

  const remove = document.createElement("div");
  remove.innerHTML = input.value;
  const editAndDelete = document.createElement("div");

  editAndDelete.appendChild(remove);
  editAndDelete.style.display = "flex";
  remove.className = "delete";
  remove.addEventListener("click", function () {
    el.remove();
  });

  const edit = document.createElement("button");
  edit.innerHTML = "edit";
  editAndDelete.appendChild(edit);
  el.appendChild(editAndDelete);
  edit.className = "edit";
  edit.addEventListener("click", function () {
    edit.style.display = "none";
    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = "done";
    el.appendChild(doneBtn);
    text.contentEditable = true;

    doneBtn.addEventListener("click", function () {
      text.contentEditable = false;
      doneBtn.remove();

      edit.style.display = "block";
    });
  });

  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedTime = formatter.format(date);
}
const button = document.getElementById("button");
button.onclick = list;
console.log("asd");
