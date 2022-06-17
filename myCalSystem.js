 

    function add(clickedBtn)
    {
        var btnVal = clickedBtn.innerHTML;
        var powerBTN = document.getElementById('powerBTN');
        var screen = document.getElementById('display');
        // Print value to screen
        if (parseInt(screen.value) == 0)
        {
        screen.value = btnVal;
        }
        else if(powerBTN.innerHTML == "OFF")
        {
            screen.value += btnVal;
        }
        else{
            //Do Nothing. Calculator is OFF
        }
    }

    function del()
    {
        let screen = document.getElementById('display');
        // Print value to screen
        let val = screen.value
        if (val.length > 0)
        {
        var str = val;
        str = str.slice(0, -1);
        screen.value = str
        }
    }


    function initCalc()
    {
        var screen = document.getElementById('display');
        var powerBTN = document.getElementsByClassName('power')[0];
        if (screen.value == "")
        {
            powerBTN.innerHTML = "ON";
            powerBTN.style.backgroundImage="linear-gradient(178deg, rgb(26 153 3), rgb(7, 110, 0))";
            screen.style.backgroundColor="#222222";
            
        }
        else
        {
            powerBTN.innerHTML = "OFF";
            powerBTN.style.backgroundImage="linear-gradient(178deg, rgb(185 2 2), rgb(110, 0, 0))";
        }
    }
    
    function power()
    {
        var screen = document.getElementById('display');
        if (screen.value == "")
        {
        screen.value = "0";
        screen.style.backgroundColor="rgb(34 159 150)";
        initCalc();
        }

        else{
            screen.value = "";
            screen.style.backgroundColor="#222222";
            initCalc();
        }
    }

    function clearScreen() 
    {
        var screen = document.getElementById('display');
        countLength = screen.value.length;
        if (countLength > 0) 
        {
            screen.value = "0";
            
        }
        else{
            //Do nothing. Screen Empty 
        }
    }

    function compute() 
    {
        let screen = document.getElementById('display');
        countLength = screen.value.length;
        if (countLength > 0) 
        {
            screen.value = eval(screen.value);
            
        }
        else{
            //Do nothing. Screen Empty 
        }
    }
