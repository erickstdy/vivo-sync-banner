// JavaScript Document
    function setSize()
    {
        document.getElementById("myvideo").style.width = 400 + "px";
        document.getElementById("myvideo").style.height = 221 + "px";
        clearInterval(myIntervalID);
    }
    var myIntervalID = setInterval(setSize, 2000);