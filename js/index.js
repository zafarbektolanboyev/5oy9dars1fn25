const countries = document.getElementById('countries');
const loader = document.getElementById('loading');
const card = document.querySelectorAll('.card');
const showBtn = document.querySelectorAll('#showBtn')

function creatCard(counter){
    return `
       <div class="card">
                <img src="${counter.flag}" alt="">
                <div class="text">
                    <h3>Name: ${counter.country}</h3>
                    <h4>Code: ${counter.code}</h4>
                    <h4>ID: ${counter.id}</h4>
                </div>
                <a id='showBtn' class='show' href="./pages/about.html">Show</a>
        </div>
    `
}
document.addEventListener('DOMContentLoaded', function(){
    fetch("https://cars-pagination.onrender.com/all-countries")
        .then(function(res){
            if(res.status < 300){
                return res.json()
            }
        })
        .then(function(data){
            data.length > 0 && data.forEach(counter => {
                const card = creatCard(counter);
                countries.innerHTML += card;
            })
        })
        .catch(err => {
            countries.style.display = 'block';
            console.log(err)
        })
        .finally(function(){
            loader.style.display = 'none';
        })
})