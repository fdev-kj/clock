const secondsDiv = document.getElementById('seconds');
const minutesDiv = document.querySelector('#minutes');
const hoursDiv = document.querySelector('#hours');

const init = () => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  secondsDiv.style.webkitTransform = `translate(-50%, -50%) rotate(${seconds * 6}deg)`;
  minutesDiv.style.webkitTransform = `translate(-50%, -50%) rotate(${minutes * 6}deg)`;
  hoursDiv.style.webkitTransform = `translate(-50%, -50%) rotate(${hours * 30}deg)`;

  setTimeout(init, 1000);
}

init();
