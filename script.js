let prevNum = ''
let calOpe = ''
let curNum = '0'
const calScreen = document.querySelector('.cal-screen')

const updateScreen = (number) => {
    calScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(curNum)
    })
})


const inputNumber = (number) => {
    if (curNum === '0') {
        curNum = number
    } else {
        curNum += number
    }
}

//Mengambil elemen2 button yang menggunakan class operator dan memberi click event
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })

})

//Mendefinisikan fungsi inputOperator
const inputOperator = (operator) => {
    if (calOpe === '') {
        prevNum = curNum //menggeser nilai curNum ke prevNum
    }
    calOpe = operator //memberikan operator ke calOp
    curNum = ''        //mengosongkan curNum
}

//Mendefinisikan funngsi Equal
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(curNum)
})

//Mendefinisikan funsgi Calcuate
const calculate = () => {
    let result = ''
    switch (calOpe) {
        case "+":
            result = parseFloat(prevNum) + parseFloat(curNum)
            break;
        case "-":
            result = prevNum - curNum
            break;
        case "*":
            result = prevNum * curNum
            break;
        case "/":
            result = prevNum / curNum
            break;
                            
        default:
            break;
    }
    curNum = result
    calOpe = ''
}




//Mengambil elemen button Decimal
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log('Decimal button is pressed')
    inputDecimal(event.target.value)
    updateScreen(curNum)
})

inputDecimal = (dot) => {
    if (curNum.includes('.')) {
        return
    }
    curNum += dot

}


//Mengambil elemen button AC--------------------------------------
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log('AC button is pressed')
    clearAll()
    updateScreen(curNum)
})

//Mendefenisikan funsgi clear
const clearAll= () => {

    prevNum = ''
    calOpe = ''
    curNum = '0'
}

//Mengambil elemen btn Del----------------------------------------
const delBtn = document.querySelector('.del')

delBtn.addEventListener('click', () => {
    console.log('Del button is pressed')
    delBelakang()
    updateScreen(curNum)
})

const delBelakang = () => {
    
    let x = String(curNum);
    curNum = x.slice(0,-1)
    
}