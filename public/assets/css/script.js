function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondDegree = (seconds / 60) * 360;
    const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30;
  
    document.querySelector('.second-hand').style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
    document.querySelector('.minute-hand').style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
    document.querySelector('.hour-hand').style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  