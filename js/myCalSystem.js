// Author: Peter Aren Gambo
// Date: 18th June, 2022
//
// SOCIAL PROFILE
// Github: https://github.com/petergambo/
// LinkedIn: https://linkedin.com/in/peter-gambo
// Facebook: https://facebook.com/peter.gambo1
// Twitter: https://twitter.com/lucre8tiv
//
//
// Git Project Repo: https://github.com/petergambo/Calculator-with-HTML-and-Javascript 


// Function to display clicked button value to the screen
    function add(clickedBtn)
    {
        let btnVal = clickedBtn.innerHTML; // This will get the value of the clicked button
        var powerBTN = document.getElementById('powerBTN'); // Gets the power button for future action
        var screen = document.getElementById('display'); // The Screen (Input tag with ID 'display')
        // Print value to screen
        if (parseInt(screen.value) == 0 && powerBTN.innerHTML == "OFF") // Identifies if its first value to be added. When calculator powers on, default screen value is 0
        {
            screen.value = btnVal; // This will replace the default '0' with our new button value to avoid issues like 01,08,03, etc.
        }
        else if(parseInt(screen.value) > 0 && powerBTN.innerHTML == "OFF") //This means that there is an existing value on our screen and this is not the users first action
        {
            screen.value += btnVal; // Therefore, I use += to add new value to existing values (while = alone as used above replaces a value completely)
        }
        else{
            //Do Nothing. Button is clicked when Calculator is OFF. Crazy Users LOL
        }
    }



    //Function to delete a single value from existing value for the Del button
    function del()
    {
        let screen = document.getElementById('display'); //Get the screen element as usual
        // Print value to screen
        let val = screen.value //assign current value to a new variable called val
        if (val.length > 1) //That means there are more than one item on our screen, we can proceed with our delete action
        {
        var newValue = val.slice(0, -1); //This will remove the last element from our screen values
        screen.value = newValue // We now replace the current old value with our new value. Logic Ends
        }

        else if (val.length == 1)
        {
            screen.value = "0"
        }

        else{
            // Chill! Do nothing
        }
    }


    function initCalc() //This will initialse our calculator and set appropriate Color styling based state of calculators. This is called each time the document is loaded 
    {
        var screen = document.getElementById('display'); //Get screen as usual
        var powerBTN = document.getElementsByClassName('power')[0]; //get PowerButton
        if (screen.value == "") //I use screen value to check current state. If screen is empty, that means calculator was just loaded
        {
            powerBTN.innerHTML = "ON"; //Set Power button to ask user to On
            powerBTN.style.backgroundImage="linear-gradient(178deg, rgb(26 153 3), rgb(7, 110, 0))"; //Then set Power button color to a green color
            screen.style.backgroundColor="#222222"; //Set screen color to a black to create an off state
            
        }
        else //If screen is not empty, calculator is active
        {
            powerBTN.innerHTML = "OFF"; //Set Power Button to ask user to OFF when they want to
            powerBTN.style.backgroundImage="linear-gradient(178deg, rgb(185 2 2), rgb(110, 0, 0))"; //Then set power button color to a red color to fit the action
        }
    }


    // Prepare the Power button action. What to do when the power button is clicked
    function power() 
    {
        var screen = document.getElementById('display'); //Get screen as usual
        if (screen.value == "") //If screen is empty, that means calculator is OFF, ON it
        {
        screen.value = "0"; //Sets screen value to 0. initCalc will now be able to change power button to OFF and add() function will now be able to add buttons data to the screen
        screen.style.backgroundColor="rgb(38 219 206)"; //Create an LED light illusion on screen by adding a light blue background color to screen
        initCalc(); //Now call initCalc to update power button. Power ON workflow complete.
        }

        else //If screen is not empty, that means calculator is ON and the OFF action is what the user wants
        { 
            screen.value = ""; //Reset screen value to empty
            screen.style.backgroundColor="#222222"; // Set background color to black to create a screen OFF illusion
            initCalc(); //Then call initCalc to set button state appropriately.
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
