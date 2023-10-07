const items = [
    {
        numberCount: 1,
        totalPrice: 5000,
        originalPrice: 5000
    },

    {
        numberCount: 1,
        totalPrice: 1200,
        originalPrice: 1200
    },

    {
        numberCount: 1,
        totalPrice: 1200,
        originalPrice: 1200
    }
];

const totalcost = document.getElementById("sum");
totalcost.textContent = 1200;


for (let i = 0; i <= items.length; i++) {
    const addItem = document.getElementsByClassName(`addbtn${i + 1}`)[0];
    const minusItem = document.getElementsByClassName(`minusbtn${i + 1}`)[0];
    const costPrice = document.getElementById(`itemcost${i + 1}`);
    const itemCount1 = document.getElementsByClassName(`numbercount${i + 1}`)[0];

    totalcost.textContent = Number(totalcost.textContent) + Number(items[i].totalPrice);

    addItem.addEventListener("click", () => {
        items[i].numberCount++;
        itemCount1.textContent = items[i].numberCount;

        items[i].totalPrice = items[i].originalPrice * items[i].numberCount;
        costPrice.textContent = items[i].totalPrice.toLocaleString();

        totalcost.textContent = Number(totalcost.textContent) + items[i].originalPrice;
    });

    minusItem.addEventListener("click", () => {
        if (items[i].numberCount > 1) {
            items[i].numberCount--;
            itemCount1.textContent = items[i].numberCount;
            costPrice.textContent = (items[i].originalPrice * items[i].numberCount).toLocaleString();
            totalcost.textContent = Number(totalcost.textContent) - items[i].originalPrice;
        }
    });

}