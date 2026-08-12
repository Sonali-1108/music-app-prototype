const name = localStorage.getItem("username") || "Guest";
document.getElementById("username").innerText = name;

const songsData = {

happy:[
{title:"Happy Beat",file:"music/happy1.mp3"},
{title:"Smile Vibes",file:"music/happy2.mp3"}
],

sad:[
{title:"Sad Melody",file:"music/sad1.mp3"}
],

chill:[
{title:"LoFi Chill",file:"music/chill1.mp3"}
],

romantic:[
{title:"Love Tune",file:"music/romantic1.mp3"}
]

};

function selectMood(mood){

const aiText=document.getElementById("aiText");
const container=document.getElementById("songs-container");

container.innerHTML="";

aiText.innerText=
"AI detected "+mood+
" mood — Enjoy your vibe 🎧";

songsData[mood].forEach(song=>{

const card=document.createElement("div");
card.classList.add("song-card");
card.innerText=song.title;

card.onclick=()=>{
playSong(song.file);
};

container.appendChild(card);

});
}

function playSong(file){
const player=document.getElementById("player");
player.src=file;
player.play();
}

function logout(){
localStorage.clear();
window.location.href="index.html";
}

function toggleMenu(){
const menu=document.getElementById("dropdown");
menu.style.display=
menu.style.display==="block"?"none":"block";
}
card.innerHTML = `
<img src="cover.jpg" class="cover">
<p>${song.title}</p>
`;
function playMood(mood){

let language =
document.getElementById("language").value;

let songPath = "";

// selecting song based on language + mood

if(language === "english"){
    songPath = "songs/english/" + mood + "1.mp3";
}

else if(language === "hindi"){
    songPath = "songs/hindi/" + mood + "2.mp3";
}

else if(language === "telugu"){
    songPath = "songs/telugu/" + mood + "3.mp3";
}

document.getElementById("audioSource").src = songPath;

let player = document.getElementById("player");
player.load();
player.play();
}