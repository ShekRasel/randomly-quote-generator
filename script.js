const apiUrl = 'https://api.quotable.io/random';
const generateQuote = document.querySelector('.btn-1');
const postOnTwitter = document.querySelector('.btn-2');
const display = document.querySelector('.para');
const author = document.querySelector('.author');

async function fetchData(){
    const res = await fetch(apiUrl);
    const data = await res.json();
    display.innerHTML =  `"${data.content}"`;
    author.innerText = `"${data.author}"`;
}
fetchData();

generateQuote.addEventListener('click',()=>{
    fetchData();
});

postOnTwitter.addEventListener("click",()=>{
    window.open(href="https://twitter.com/intent/tweet?text=" + display.innerHTML , "tweet window" , "heigth = 600px , width = 600px");
});