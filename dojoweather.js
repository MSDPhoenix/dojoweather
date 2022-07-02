function remove_cookie_div() {
    const cookie_div = document.getElementById("cookie_div");
    cookie_div.remove();
}
function convert_temperature(element) {
    const temps = document.querySelectorAll(".temps");
    for (let i = 0; i < temps.length; i++) {
        let temp = temps[i].innerText;
        temp=Number(temp.slice(0,temp.length -1))
        if (element.value == "°F"){
            temp = Math.round(temp*9/5+32);
        } else {
            temp = Math.round((temp-32)*5/9);
        }
        temps[i].innerText = temp+"°"
    } 
}
