const findTheOldest = function(arr) {
    arr.map(person =>{
        let age = 0
        if(person.yearOfDeath === undefined){
            const date = new Date();
            let presentYear = date.getFullYear()
             person.age= presentYear - person.yearOfBirth
        } else{
            person.age= person.yearOfDeath - person.yearOfBirth
        }
   })
        let maxAge = arr.reduce((acc, current) => (current.age > acc ? current.age : acc), -                Infinity)
        const result = arr.find(obj => obj.age === maxAge);
          return result

    }

// Do not edit below this line
module.exports = findTheOldest;
