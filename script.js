let display = document.getElementById('display');

function clearDisplay() 
{
    display.innerText = '0';
}

function deleteLast() 
{
    if (display.innerText.length === 1 || (display.innerText.length === 2 && display.innerText.includes('-'))) 
    {
        display.innerText = '0';
    } else 
    {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function appendNumber(number) 
{
    if (display.innerText === '0' || display.innerText === 'Error') 
    {
        display.innerText = number;
    }
    else 
    {
        display.innerText += number;
    }
}

function appendDot() 
{
    if (!display.innerText.includes('.')) 
    {
        display.innerText += '.';
    }
}

function appendOperator(operator) 
{
    const lastChar = display.innerText[display.innerText.length - 1];
    if (['+', '-', '*', '/', '%'].includes(lastChar)) 
        {
        // Replace the last operator with the new one
        display.innerText = display.innerText.slice(0, -1) + operator;
    }
    else
    {
        display.innerText += operator;
    }
}

// result
function calculate()
{
    try 
    {
        // Evaluate the expression and update the display
        let result = eval(display.innerText.replace(/x/g, '*'));
        display.innerText = result;
    } 
    catch (e) 
    {
        display.innerText = 'Error';
    }
}
