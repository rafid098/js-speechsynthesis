let questions = "what is your name?"
function call() {
    if (questions == "what is your name?") {
        let utterance = new SpeechSynthesisUtterance(`my name is Rafid`);
        speechSynthesis.speak(utterance);
    }
}
let question = "how older you?"
function cal(){
    if(question = "how older you?"){
        let utterance = new SpeechSynthesisUtterance(`my age is 21`);
        speechSynthesis.speak(utterance);
    }
}
let lives = "where are you living?"

function live(){
    if(lives = "where are you living?"){
        let utterance = new SpeechSynthesisUtterance(`i'm live in satkhira`);
        speechSynthesis.speak(utterance);
    }
}
let village = "what is your village name?"

function vilage(){

    if(village = "what is your village name?"){
        let utterance = new SpeechSynthesisUtterance(`my village name is goyra`);
        speechSynthesis.speak(utterance);
    }
}
let college = "what is your collage name?"

function collage(){
    if(college = "what is your college name?"){
        let utterance = new SpeechSynthesisUtterance(`my collage name is Jashore Polytechnic Institue`);
        speechSynthesis.speak(utterance);
    }
}
let dep = "what is your department?"

function department(){
    if(dep = "what is your department?"){
        let utterance = new SpeechSynthesisUtterance(`i'm studing in computer engineering`);
        speechSynthesis.speak(utterance);
    }
}
call(questions)
cal(question)
live(lives)
vilage(village)
collage(college)
department(dep)