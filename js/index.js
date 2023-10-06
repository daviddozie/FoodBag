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

const text = document.querySelector(".shaking-text");

function startShake() {
    text.style.animation = "shake 1s ease-in-out";
    setTimeout(() => {
        text.style.animation = "none"; // Stop the animation
        setTimeout(() => {
            text.style.animation = "shake 1s ease-in-out"; // Resume animation
            setTimeout(startShake, 4000); // Wait for 20 seconds and repeat
        }, 1000);
    }, 1000);
}

startShake(); // Start the animation