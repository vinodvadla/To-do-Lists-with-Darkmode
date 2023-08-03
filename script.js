let Input = document.querySelector("input")
let Addbtn = document.getElementById("button-addon2");
let ul = document.getElementById("ul")
let body = document.getElementById("body");
let img = document.getElementById("img");
Addbtn.addEventListener("click", () => {
    if (Input.value === "") {
        alert("input field will not be Empty !")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = Input.value;
        li.classList.add("myli");
        li.classList.add("list-group-item");

        li.classList.add("d-flex");
        li.classList.add("justify-content-between");
        let btn = document.createElement("button");
        btn.classList.add("btn")
        btn.classList.add("btn-dark")
        btn.classList.add("ml-5")
        ul.appendChild(li);
        btn.innerHTML = "Remove"
        li.appendChild(btn);
        Input.value = ""
    }
})
ul.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
})
img.addEventListener("click", () => {
    body.classList.toggle("filter");
    img.classList.toggle("lightmode")
})
