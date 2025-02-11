function drawClock() {
    const canvas = document.getElementById("analogClock");
    const ctx = canvas.getContext("2d");
    const radius = canvas.width / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw clock face
    ctx.beginPath();
    ctx.arc(radius, radius, radius - 5, 0, 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw hour markers
    ctx.fillStyle = "black";
    for (let i = 0; i < 12; i++) {
        let angle = (i * 30) * (Math.PI / 180);
        let x = radius + Math.cos(angle) * (radius - 10);
        let y = radius + Math.sin(angle) * (radius - 10);
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.fill();
    }

    // Get current time
    let now = new Date();
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Draw hour hand
    let hourAngle = ((hours * 30) + (minutes * 0.5)) * (Math.PI / 180);
    drawHand(ctx, radius, hourAngle, radius * 0.5, 4);

    // Draw minute hand
    let minuteAngle = (minutes * 6) * (Math.PI / 180);
    drawHand(ctx, radius, minuteAngle, radius * 0.7, 3);

    // Draw second hand
    let secondAngle = (seconds * 6) * (Math.PI / 180);
    drawHand(ctx, radius, secondAngle, radius * 0.8, 2, "red");
}

function drawHand(ctx, radius, angle, length, width, color = "black") {
    ctx.beginPath();
    ctx.moveTo(radius, radius);
    ctx.lineTo(radius + Math.cos(angle - Math.PI / 2) * length, radius + Math.sin(angle - Math.PI / 2) * length);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.stroke();
}

function updateDigitalClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    document.getElementById("digitalClock").textContent = `${hours}:${minutes}:${seconds}`;
}

function updateClocks() {
    drawClock();
    updateDigitalClock();
}

setInterval(updateClocks, 1000);
updateClocks(); // Initialize immediately


function updateDigitalClock() {
    let now = new Date();

    // Format time as HH:MM:SS
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    // Format date as "Monday, February 12, 2025"
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = now.toLocaleDateString("en-US", options);

    // Update the digital clock display
    document.getElementById("digitalClock").innerHTML = `
        <div>${formattedDate}</div>
        <div>${hours}:${minutes}:${seconds}</div>
    `;
}
