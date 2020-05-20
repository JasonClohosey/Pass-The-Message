// function deliverMeassage() {
//     document.getElementById("input").value;
//     console.log("button Clicked")
// };
// deliverMeassage()
// var message = ""

document.getElementById("btn").addEventListener("click", function() {
    var inputValue = document.getElementById("input").value;
    console.log(inputValue);
    
    document.getElementById("deliveredMessage").innerHTML = inputValue
});