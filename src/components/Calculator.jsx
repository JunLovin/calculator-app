import { useState } from 'react'
import '@styles/Calculator.css'

function Calculator() {
    const [num, setNum] = useState(0)
    const [secondNum, setSecondNum] = useState(0)
    const [operator, setOperator] = useState(null)

    const handleAddNumber = (numBtn) => {
        if (operator === null) {
            if (!num) {
                setNum(numBtn)
            } else {
                setNum(prevNum => {
                    const response = `${prevNum}${numBtn}`
                    parseInt(response)
                    return response
                })
            }
        } else {
            if (!secondNum) {
                setSecondNum(numBtn)
            } else {
                setSecondNum(prevNum => {
                    const response = `${prevNum}${numBtn}`
                    return response
                })
            }
        }
    }

    const handleOperation = () => {
        let result;
        const intNum = parseFloat(num)
        const intSecondNum = parseFloat(secondNum)
        switch (operator) {
            case '+':
                result =  intNum + intSecondNum
                break;
            case '-':
                result = intNum - intSecondNum
                break;
            case '/':
                result = intNum / intSecondNum
                break;
            case '*':
                result = intNum * intSecondNum
                break;
            default: 
                return
        }
        setNum(result)
        setSecondNum('')
        setOperator(null)
    }

    const handleOperator = (op) => {
        setOperator(op)
    }

    const handleClear = () => {
        setNum(0)
        setOperator(null)
        setSecondNum(0)
    }

    console.log(typeof num)
    console.log(num)

    return (
        <>
            <section className="calculator-container-box">
                <div className="calculator">
                    <div className="calculator-screen">{num}{operator && operator}{secondNum}</div>
                    <div className="calculator-buttons">
                        <div className="calculator-num-buttons">
                            <div className="buttons-first-row buttons">
                                <div className="numberOne num-btn" onClick={() => handleAddNumber(1)}>1</div>
                                <div className="numberTwo num-btn" onClick={() => handleAddNumber(2)}>2</div>
                                <div className="numberThree num-btn" onClick={() => handleAddNumber(3)}>3</div>
                            </div>
                            <div className="buttons-two-row buttons">
                                <div className="numberOne num-btn" onClick={() => handleAddNumber(4)}>4</div>
                                <div className="numberTwo num-btn" onClick={() => handleAddNumber(5)}>5</div>
                                <div className="numberThree num-btn" onClick={() => handleAddNumber(6)}>6</div>
                            </div>
                            <div className="buttons-third-row buttons">
                                <div className="numberOne num-btn" onClick={() => handleAddNumber(7)}>7</div>
                                <div className="numberTwo num-btn" onClick={() => handleAddNumber(8)}>8</div>
                                <div className="numberThree num-btn" onClick={() => handleAddNumber(9)}>9</div>
                            </div>
                            <div className="buttons-zero-equal">
                                <div className="button-zero" onClick={() => handleAddNumber(0)}>0</div>
                                <div className="button-equal" onClick={handleOperation}>=</div>
                            </div>
                        </div>
                        <div className="calculator-operators-buttons">
                            <div className="sum operator-button" onClick={() => handleOperator('+')}>+</div>
                            <div className="rest operator-button" onClick={() => handleOperator('-')}>-</div>
                            <div className="division operator-button" onClick={() => handleOperator('/')}>/</div>
                            <div className="multiplication operator-button" onClick={() => handleOperator('*')}>*</div>
                            <div className="CE" onClick={handleClear}>CE</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Calculator;