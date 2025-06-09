const getTheTitles = function(arr) {
 let titleArr =[]
    for(let i=0; i< arr.length; i++){
        let title = arr[i].title
        titleArr.push(title)
    }
    return titleArr
};
// Solution: return array.map((book) => book.title);
// Do not edit below this line
module.exports = getTheTitles;
