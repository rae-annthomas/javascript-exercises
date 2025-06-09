const getTheTitles = function(arr) {
 let titleArr =[]
    for(let i=0; i< arr.length; i++){
        let title = arr[i].title
        titleArr.push(title)
    }
    return titleArr
};

// Do not edit below this line
module.exports = getTheTitles;
