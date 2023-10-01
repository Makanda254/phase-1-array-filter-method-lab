// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
let name='';

function findMatching(drivers, name){
    const lowerCaseName = name.toLowerCase();
    const newArray= drivers.filter(driver => driver.toLowerCase() === lowerCaseName)

    return newArray;

}



function fuzzyMatch(drivers, firstLetters=''){
    
    const newDrivers = drivers.filter(drivers => drivers.startsWith(firstLetters))

    return newDrivers;
}
console.log(fuzzyMatch(drivers, 'Sa'))

function matchName(drivers, driverName=''){
    return drivers.filter(driver => driver.name === driverName);
}

