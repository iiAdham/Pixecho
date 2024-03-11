//section 4
const buttons = document.querySelectorAll('.content-button');
const contents = document.querySelectorAll('.content');
let indecators = document.querySelectorAll(".indecators");
let contentsRaw = document.querySelectorAll(".contents-raw");

document.addEventListener('DOMContentLoaded', function() {
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');

            contents.forEach(content => {
                if (content.id === target) {
                    content.classList.remove("hidden");
                    content.classList.add("show");
                } else {
                    content.classList.remove("show");
                    content.classList.add("hidden");
                }
            });

            // Toggle active class for buttons
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        });
    });
});
function removeAllActiveBtn(){
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
}
function removeAllShown(){
    contents.forEach(content => {
        content.classList.remove("show");
        content.classList.add("content");
    })
}
for (let i = 0; i < indecators.length; i++) {
    indecators[i].addEventListener("click",()=>{
        for (let j = 0; j < contentsRaw.length; j++) {
            if(contentsRaw[j].classList.contains("shown-in-page")){
                contentsRaw[j].classList.replace("shown-in-page","hidden");
                removeAllActiveBtn();
                removeAllShown();
                break;
            }
        }
        if(i == 0){
            buttons[0].classList.add("active");
            contents[0].classList.replace("content","show");
        }else if(i == 1){
            buttons[3].classList.add("active");
            contents[3].classList.replace("content","show");
        }else{
            buttons[6].classList.add("active");
            contents[6].classList.replace("content","show");
        }
        indecators.forEach(indecator => {
            indecator.classList.remove("active");
        });
        indecators[i].classList.add("active");
        contentsRaw[i].classList.replace("hidden","shown-in-page");
    })    
}

// aos
    AOS.init();

// bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))