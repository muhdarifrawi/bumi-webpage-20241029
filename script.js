(() => {
    document.addEventListener("DOMContentLoaded", (event) => {
        heroTextChanger();
    })

})();

const pause = ms => new Promise(res => setTimeout(res, ms))

heroTextChanger = async () => {


    // console.log("hero change running");
    let textArr = [
        "Staying Grounded",
        "Stability and Growth",
        "Rooted Firm",
        "Reach for the Open Skies",
        "Empowering To Wellness",
    ]

    let heroText = document.querySelector("#hero-text");

    let count = 0;

    while (count < 5) {
        heroText.innerText = textArr[count];
        // console.log(textArr[count]);
        await pause(3000);
        if (count == 4) {
            count = 0;
        }
        else {
            count += 1;
        }
    }
}