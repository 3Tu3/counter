let count = 0;
let clicks = 0

function updateCounter() {
        document.getElementById("counter").innerText = count;

}

function updateClicks() {
    document.getElementById("clicks").innerText = "you clicked " + clicks, "times";
}

function input() {
    const inside = document.getElementById("inputNumber").value;
    count = inside;
    document.getElementById("counter").innerText = count;
}

function zero() {
    count = 0;
    updateCounter();
    clicks ++;
    updateClicks();
}

function zeroClicks() {
    clicks = 0;
    updateClicks();
}

function zeroAll() {
    count = 0;
    updateCounter();
    clicks = 0;
    updateClicks();
}

function increment() {
        count++;
        updateCounter();
        clicks ++;
        updateClicks();
}

function decrement() {
    count--;
    updateCounter();
    clicks ++;
    updateClicks();
}

function more() {
    count = count + 100;
    updateCounter();
    clicks ++;
    updateClicks();
}

function less() {
    count = count - 100;
    updateCounter();
    clicks ++;
    updateClicks();
}

function fivemore() {
    count = count + 500;
    updateCounter();
    clicks ++;
    updateClicks();
}

function fiveless() {
    count = count - 500;
    updateCounter();
    clicks ++;
    updateClicks();
}
