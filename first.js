function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Rotations calculate karna
    const hourRotation = (hours % 12) * 30 + minutes * 0.5; 
    const minuteRotation = minutes * 6 + seconds * 0.1;    
    const secondRotation = seconds * 6;                    

    // Soyion ko rotate karna
    document.getElementById('hour').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondRotation}deg)`;
}

// Har 1 second baad clock chalana
setInterval(updateClock, 1000);

// Foran pehli dafa chalana
updateClock();