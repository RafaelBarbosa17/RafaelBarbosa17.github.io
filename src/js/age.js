const age = document.getElementById('idade');

const myAge = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    const myBirdayYear = 2003;
    const myBirdayMonth = 03;
    const myBirdayDay = 25;

    if (currentMonth > myBirdayMonth) {
        return currentYear - myBirdayYear;
    } else if (currentMonth === myBirdayMonth && currentDay >= myBirdayDay) {
        return currentYear - myBirdayYear;
    } else if (currentMonth < myBirdayMonth) {
        return currentYear - myBirdayYear - 1;
    } else if (currentMonth === myBirdayMonth && currentDay < myBirdayDay) {
        return currentYear - myBirdayYear - 1;
    }
}

age.innerHTML = myAge();