
const sizes = document.querySelectorAll('.size');
const drives = document.querySelectorAll('.drive');
const colors = document.querySelectorAll('.color');
const cars = document.querySelectorAll('.car');
const gradients = document.querySelectorAll('.gradient');
const teslaBg = document.querySelector('.teslaBackground');

let prevColor = "blue";
let animationEnd = true;

// click to elements
sizes.forEach(size => size.addEventListener('click', changeSize));
// adding function
function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

drives.forEach(drive => drive.addEventListener('click', changeDrive));
function changeDrive(){
    drives.forEach(drive => drive.classList.remove('active'));
    this.classList.add('active');
}


function changeColor(){
    if(!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    // let drive = this.getAttribute('color');
    let car = document.querySelector(`.car[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    // dualdrives.forEach(drive => drive.classList.add('active'));
    // this.classList.remove('active'); 

    cars.forEach(s => s.classList.remove('show'));
    car.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}


colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let carHeight = cars[0].offsetHeight;
        teslaBg.style.height = `${carHeight * 0.9}px`;
    }
    else{
        teslaBg.style.height = "655px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);

function deliveryDate () {
    document.getElementById("deliveryId").classList.add("newStyle");
    // document.getElementById("myDIV").classList.toggle("newClassName");
}