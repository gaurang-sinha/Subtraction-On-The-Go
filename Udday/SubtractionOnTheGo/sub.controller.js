
function getRadomNumer(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFromArray(arr){
    return Math.floor(Math.random() * arr.length);
}

function getOptionsFromNum(num){
    const numb = [];
    const option = [];
    const number = num.toString();
    for(let i = 0; i<number.length; i++){
        numb.push(parseInt(number[i]));
    }
    for(let i = 0; i<numb.length; i++){
        let num = numb[getRandomFromArray(numb)];
        option.push(num);
    }
    let indextoRemove = getRadomNumer(1,3);
    return {
        num: parseInt(option.join('')),
        indextoRemove
    }
}

function getMinuend(minuend, borrowFlag){
    let num1 = [];
    let min = 5; 
    let max = 9; 
    for(let i = 0; i< minuend; i++){
        if(i!=0 && borrowFlag == 1){
            min = 1;
            max = 4;
        }
        num1.push(getRadomNumer(min, max));
    }
    return parseInt(num1.join(''));
}

function getSubtrahend(subtrahend, borrowFlag){
    let num2 = [];
    let min = 1;
    let max = 4;
    for(let i = 0; i< subtrahend; i++){
        if(i == 0 && borrowFlag == 1){
            min = 5;
            max = 9;
        }
        num2.push(getRadomNumer(min, max));
    }
    return parseInt(num2.join(''));    
}

function getCorrectAnswer(num1, num2){
    return num1 - num2;
}

function getOptions(ans){
    const options = [];
    let num;
    for(let i = 0; i < 4; i++){
        num = getOptionsFromNum(ans);
        options.push(num.num);
    }
    options[num.indextoRemove] = ans;
    return options;
}

function getResposeObj(index, minuend, subtrahend, borrowFlag){
        const num1 = getMinuend(minuend, borrowFlag);
        const num2 = getSubtrahend(subtrahend, borrowFlag);
        if(num2>num1){
            return 0;
        }
        const ans = getCorrectAnswer(num1, num2);
        const options = getOptions(ans);
        const obj = {
            "Question ": index + 1,
            "Minuend": num1,
            "subtrahend": num2,
            "Correct Answer": ans,
            "Options": options
        }
        return obj;
}

function getSubtraction(req, res){
    try{
        const minuend = req.query.minuend;
        const subtrahend = req.query.subtrahend;
        const borrowFlag = req.query.borrowFlag;
        const numOfQuestions = req.query.numOfQuestions;
        const responseObj = [];
        for(let i = 0; i<numOfQuestions; i++){
            let num = getResposeObj(i, minuend, subtrahend, borrowFlag);
            if(num == 0){
                return res.send('Subtrahend cannot be smaller than Minuend');
            }
            responseObj.push(num);
        }
        res.send(responseObj);
    } catch(e){
        console.log(e)
    }    
}

module.exports = getSubtraction