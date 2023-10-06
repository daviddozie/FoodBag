for (let i = 1; i <= 8; i++) {
    let addButton = document.getElementsByClassName(`add-btn${i}`)[0];
    let removeButton = document.getElementsByClassName("rmv-btn" + i)[0];
    let redDot = document.getElementsByClassName("dot")[0];

    addButton.addEventListener("click", () => {
        addButton.style.display = "none";
        removeButton.style.display = "block";

        var cartCount = localStorage.getItem("addcount");
        let s = parseInt(cartCount);
        let output = s + 1;
        localStorage.setItem("addcount", output);

        if (output > 0) {
            redDot.style.display = "unset"
        } else {
            redDot.style.display = "none"
        }
    })

    removeButton.addEventListener("click", () => {
        addButton.style.display = "block";
        removeButton.style.display = "none";

        var cartCount = localStorage.getItem("addcount");
        let t = parseInt(cartCount);
        let output = t - 1;
        localStorage.setItem("addcount", output)

        if (output <= 0) {
            redDot.style.display = "none"
        } else {
            redDot.style.display = "unset"
        }
    })
}

localStorage.setItem("addcount", 0);