const bg = document.querySelector('#background');
const lights = document.querySelectorAll('#background span');

const createLightEffect = () => {
    lights.forEach(light => {
        const positionRandom = Math.random() * 100;
        const randomSecs = Math.random() * 10;
        light.className = 'light';
        light.style.left = `${positionRandom}%`;
        light.style.animation = `movement ${5 + randomSecs}s linear infinite`
    })
   
}

setInterval(createLightEffect(), 1000);
