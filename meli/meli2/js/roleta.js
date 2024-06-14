const spin = async () => {
    const degBase = 1440;//To simulate at least 4 spins of the roulette
    const deg = await randomSpinDeg();//Get Random Extra Degrees to spin the roulette     
    const section = getSection(deg);//Get the section according with the random degrees
    const totalDeg = deg + degBase;//Total degrees of the roulette going to spin
    const sectionsElm = document.querySelectorAll('.optionRoulette');//Get all sections in the roulette
    const roulette = document.querySelector('#roulette');

    console.log(section);

    btnSpin.disabled = true;//Avoid user spin the roulette in each click over the button
    roulette.classList.remove('transition')
    roulette.style.transform = `rotate(0deg)`;
    sectionsElm.forEach(function (elm, i) {
        elm.classList.add('brightness')// Add brightness in the section selected 
    });

    setTimeout(() => {
        roulette.classList.add('transition')
        roulette.style.transform = `rotate(${totalDeg}deg)`;
    }, 10)

    setTimeout(() => {
        sectionsElm.forEach(function (elm, i) {
            elm.classList.remove('brightness')// Add brightness in the section selected 
        });
        sectionsElm.forEach(function (elm, i) {
            if (i === section) {
                elm.classList.add('brightness')// Add brightness in the section selected
            }
            else {
                elm.classList.add('opacity')//Add opacity in all elements no selected
            }
        });
        document.querySelector('.container').classList.add('flyTop')//Add class to hide the roulette after the animation
        btnSpin.disabled = false;
    }, 4000);// !!This setTimeOut need to have the same Time as in the CSS class 'transition'   
}

const getSection = (deg) => {

    let sectionsArray = ['Red', 'Green', 'Blue', 'OtherBlue', 'Purple', 'Yellow'];//Array with all the sections on the roulette
    let sectionLength = sectionsArray.length;//Get total number of sections
    let degBySection = 360 / sectionLength;//Get the corresponding grades to each section
    let ranges = [];
    let value = 360;//Total Degrees

    for (let i = 0; i < sectionLength; i++) {
        value -= (i === 0) ? degBySection / 2 : degBySection;
        ranges.push(value);
    }

    let result = ranges.map((elm, i) => (deg >= elm) ? i : null).filter(elm => elm != null);

    return (result.length === 0) ? 0 : result[0]
}

const randomSpinDeg = () => {
    return Math.floor(Math.random() * (360 - 0 + 1)) + 0;
}

const main = () => {
    const btnSpin = document.querySelector('#btnSpin');
    btnSpin.addEventListener('click', spin);
}

main();