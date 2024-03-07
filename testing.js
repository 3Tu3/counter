let count = 0;

function updateCounter() {
        document.getElementById("counter").innerText = count;

}

function increment() {
        count++;
        updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function more() {
    count = count + 100;
    updateCounter();
}

function less() {
    count = count - 100;
    updateCounter();
}

function fivemore() {
    count = count + 500;
    updateCounter();
}

function fiveless() {
    count = count - 500;
    updateCounter();
}

function zero() {
    count = 0;
    updateCounter();
}