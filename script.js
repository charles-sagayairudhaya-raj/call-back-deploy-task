function countdown(count, callback) {
    if (count >= 1) {
        document.getElementById("countdown").innerHTML = count;
        setTimeout(function () {
            countdown(count - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}
function displayMessage() {
    document.getElementById("message").innerHTML = "Happy Independence Day!";
}
countdown(10, displayMessage);
