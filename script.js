const searchform = document.getElementById('searchform');
const searchbox = document.getElementById('searchbox');
const searchresult = document.getElementById('searchresult');
const showmorebtn = document.getElementById('showmorebutton');

let keyword = '';
let page = 1;
const accesskey = "ZNr4dymbr7-NlRqM778vs5q6rKD758QDH7DuKaVJ-W4";

async function searchimage() {
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=21`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.map((result)=> {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imglink = document.createElement('a');
        imglink.href = result.links.html;

        imglink.appendChild(image);
        searchresult.appendChild(imglink);
    })
    showmorebtn.style.display = "block"
}
searchform.addEventListener('submit', (e) => {
    e.preventDefault();
    searchresult.innerText = ''; // Clear the previous search results
    page = 1;
    searchimage();
})

showmorebtn.addEventListener('click',()=>{
    page++;
    searchimage();
})
