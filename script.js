function result() {
    let radius = parseInt(prompt(`Enter the radius of the circle:`));
    let result = 2 * radius * 3.142;
    let result1 = (radius * radius) * 3.142;
    let message = document.getElementById("message");
    let error = document.getElementById("error");

    if (isNaN(radius)) {
        error.textContent = `Please enter valid number for radius!`;
    } else {
        message.textContent = `Radius of a circle ${radius}. The circumference is ${result.toFixed(2)}. The area is: ${result1.toFixed(2)}`;
    }
}