for (i = 1; i <= 4; i++) {
    let place = document.getElementById("location");
    let grayitem = document.getElementsByClassName(`gray${i}`)[0];
    let reditem = document.getElementsByClassName(`red${i}`)[0];

    place.addEventListener('change', () => {
        if (place.value === "") {
            grayitem.style.display = "block";
            reditem.style.display = "none";
        } else {
            reditem.style.display = "block";
            grayitem.style.display = "none";
        }
    })

}