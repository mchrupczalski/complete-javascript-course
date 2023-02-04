document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const textArea = document.querySelector("textarea");
const theButton = document.querySelector("button");

function validateInput() {
    const data = textArea.value.split("\n");
    for (const d of data) {
        if (!d) continue;
        let parts = d.trim().split("_");
        console.log(parts[0].toLowerCase() + parts[1].slice(0, 1).toUpperCase() + parts[1].slice(1).toLowerCase());
    }
}

theButton.addEventListener("click", validateInput);