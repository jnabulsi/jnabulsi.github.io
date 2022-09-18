/*filename apply.js 
*/


function j1func()
{
    
    localStorage.removeItem("jid");
   
    localStorage.setItem("jid", "JRFA0409");
}

function j2func()
{
    
    localStorage.removeItem("jid");
   
    localStorage.setItem("jid", "JRFA6621");
}

function fillIn()
{
    
    let items = localStorage.length;

    let code = localStorage.getItem("jid");

    let fname = localStorage.getItem("fname");

    let lname = localStorage.getItem("lname");

    let birthday = localStorage.getItem("birthday");

    let g1 = localStorage.getItem("g1");

    let g2 = localStorage.getItem("g2");

    let streetAdress = localStorage.getItem("streetAdress");

    let suburb = localStorage.getItem("suburb");

    let states = localStorage.getItem("states");
    
    let postcode = localStorage.getItem("postcode");


    if(items > 0)
    {
        if(code == "JRFA6621" || code == "JRFA0409")
        {
            document.getElementById("jrn").readOnly = true;
        }
        document.getElementById("jrn").value = code; 

        document.getElementById("fname").value = fname;

        document.getElementById("lname").value = lname;

        document.getElementById("birthday").value = birthday;

        document.getElementById("g1").checked = g1;

        document.getElementById("g2").checked = g2;

        document.getElementById("streetAdress").value = streetAdress;

        document.getElementById("suburb").value = suburb;

        document.getElementById("states").value = states;

        document.getElementById("postcode").value = postcode;
    }
}

function saveValues()
{
    let fname = document.getElementById("fname").value;

    localStorage.setItem("fname", fname);

    let lname = document.getElementById("lname").value;

    localStorage.setItem("lname", lname);

    let birthday = document.getElementById('birthday').value;

    localStorage.setItem("birthday", birthday);

    let g1 = document.getElementById("g1").checked;

    localStorage.setItem("g1", g1);
    
    let g2 = document.getElementById("g2").checked;

    localStorage.setItem("g2", g2);

    let streetAdress = document.getElementById("streetAdress").value;

    localStorage.setItem("streetAdress", streetAdress);

    let suburb = document.getElementById("suburb").value;

    localStorage.setItem("suburb", suburb);

    let states = document.getElementById("states").value;

    localStorage.setItem("states", states);

    let postcode = document.getElementById("postcode").value;

    localStorage.setItem("postcode", postcode);
}

function validate()
{

    //if check box is selected and skills txt box is empty 
    if(document.getElementById('skills').checked && (document.getElementById('skillstext').value == ""))
    {//give an error
        document.getElementById("error").style.visibility = "visible";
        var message = "Please type other skills or uncheck other skills";
        document.getElementById("error").innerHTML = message;
        return false;
    }


    //to check birthdays are in required range
    birthday = document.getElementById('birthday');
    var dob =new Date(birthday.value);
    var year  = dob.getFullYear();
    if(year < 1942 || year > 2007)
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Age must be between 80 and 15 years old";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    //to ensure the postcode is correct for each state selection

    postcode = document.getElementById("postcode").value;
    var state = document.getElementById("states");
    var text = state.options[state.selectedIndex].text;

    if(text == "VIC" && !((postcode > 2999 && postcode < 4000)||(postcode > 7999 && postcode < 9000)))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! VIC Postcode must start with 3 or 8";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "NSW" && (postcode < 999 || postcode > 1999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! NSW Postcode must start with 1";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "QLD" && !((postcode > 3999 && postcode < 5000)||(postcode > 8999 && postcode < 10000)))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! QLD Postcode must start with 4 or 9";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "NT" && (postcode < 0 || postcode > 999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! NT Postcode must start with 0";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "WA" && (postcode < 5999 || postcode > 6999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! WA Postcode must start with 6";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "SA" && (postcode < 4999 || postcode > 5999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! SA Postcode must start with 5";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "TAS" && (postcode < 6999 || postcode > 7999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! TAS Postcode must start with 7";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    if(text == "ACT" && (postcode < 0 || postcode > 999))
    {
        document.getElementById("error").style.visibility = "visible";
        var message = "Incorrect Postcode! ACT Postcode must start with 0";
        document.getElementById("error").innerHTML = message;
        return false;
    }

    saveValues();
}

//init function to call all other functions
function init()
{

    alert("up5");

    fillIn();

    var element = document.getElementById("jobs");

    //If it isn't "undefined" and it isn't "null", then it exists.
    if(typeof(element) != 'undefined' && element != null){
        alert('Element exists!');
        j1.addEventListener("click", j1func);

        j2.addEventListener("click", j2func);
    }


    document.getElementById('form').onsubmit= function() {
        return validate();
    };

/*

    form.addEventListener("submit", validate);
*/    
}

window.onload = init;

