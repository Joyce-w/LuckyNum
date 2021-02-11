function snakeToCamel(str) {
    let camelCaseWordsArr = [] 

    //separate out words between each underscore into array
    let words_arr = str.split('_')

    //place first word into empty array
    camelCaseWordsArr.push(words_arr[0])

    //Get word besides the the first word in array 
    for (let i = 1; i < words_arr.length; i++){
        //uppercase first letter in each word 
        let temp = words_arr[i][0].toUpperCase()
        //replace uppercased word with lower case
        
        let new_word = words_arr[i].replace(words_arr[i][0], temp)
        camelCaseWordsArr.push(new_word)
    }
    let camelCaseWords = camelCaseWordsArr.join('')
    return (camelCaseWords)

}


