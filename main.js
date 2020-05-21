document.getElementById("btn").addEventListener("click", function() {
    var inputValue = document.getElementById("input").value;
    console.log(inputValue);
    
    document.getElementById("deliveredMessage").innerHTML = inputValue

    document.getElementById("input").value = ""
});