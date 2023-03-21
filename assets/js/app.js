const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("btn1")){
            theme.style.setProperty("--background-color", "#3498db");
            theme.style.setProperty("--color", "#fff");
        }
        else if(color.contains("btn2")){
            theme.style.setProperty("--background-color", "#ff1756");
            theme.style.setProperty("--color", "#fff");
        }
        else if(color.contains("btn3")){
            theme.style.setProperty("--background-color", "#1cb65d");
            theme.style.setProperty("--color", "#fff");
        }
        else if(color.contains("btn4")){
            theme.style.setProperty("--background-color", "#8e44ad");
            theme.style.setProperty("--color", "#fff");
        }
        else if(color.contains("btn6")){
            theme.style.setProperty("--background-color", "#fff");
            theme.style.setProperty("--color", "#c05555");
        }
        else{
            theme.style.setProperty("--background-color", "#f4b932");
            theme.style.setProperty("--color", "#fff");
        }
    });
});