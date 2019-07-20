

function check() {
    let name = document.querySelector("input").value;
    let intelligence = ["smart", "great", "dumb"];
    let intelligenceCalculator = intelligence[Math.floor(Math.random() * intelligence.length)];
    alert(name + " " + intelligenceCalculator); 

}