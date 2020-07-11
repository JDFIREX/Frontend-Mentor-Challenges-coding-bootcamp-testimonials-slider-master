// var

class Person {
    constructor(Name,Job,Img,Description){
        this.Name = Name;
        this.Job = Job;
        this.Img = Img;
        this.Description = Description;
    }
}

let TanyaDescription = "\" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this curse enough. I'm now in the job of my dreams and so excited about the future. \""
const Tanya = new Person("Tanya Sinclair", "UX Engineer", "images/image-tanya.jpg", TanyaDescription)

let JohnDescription = "\" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instrucotrs go into is incredible. I now feel so confident about starting up as a professional developer.  \""
const John = new Person("John Tarkpor", "Junior Front-end Developer", "images/image-john.jpg", JohnDescription)

let Image = document.querySelector('.img_person_svg');
let Name = document.querySelector('.name')
let Job = document.querySelector('.job')
let Description = document.querySelector('.quote')

let sliderChoice = [Tanya,John];
let Choice = 0;
let leftArrow = document.querySelector(".left_btn");
let RightArrow = document.querySelector(".right_btn");

// load web

window.addEventListener("load" , () => setPerson(Tanya))

function setPerson(Person){
    Image.src = Person.Img
    Name.innerHTML = Person.Name;
    Job.innerHTML = Person.Job;
    Description.innerHTML = Person.Description;
}




// slider


leftArrow.addEventListener('click', () => leftArrowChange())

function leftArrowChange(){

    Choice--;
    Choice < 0 ? Choice = (sliderChoice.length - 1) : null;

    HiddenInfo(Image,Name,Job,Description)
    setTimeout(() => setPerson(sliderChoice[Choice]), 500);
    setTimeout(() => ShowInfo(Image,Name,Job,Description), 700); 

}


RightArrow.addEventListener('click', () => RightArrowChange())

function RightArrowChange(){

    Choice++;
    Choice > (sliderChoice.length - 1) ? Choice = 0 : null;

    HiddenInfo(Image,Name,Job,Description)
    setTimeout(() => setPerson(sliderChoice[Choice]), 500);
    setTimeout(() => ShowInfo(Image,Name,Job,Description), 700); 

}

function HiddenInfo(Image,Name,Job,Description){
    for(let a in arguments){
        arguments[a].style.opacity = "0"
    }
}
function ShowInfo(Image,Name,Job,Description){
    for(let a in arguments){
        arguments[a].style.opacity = "1"
    }
}