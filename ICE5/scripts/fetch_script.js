console.log('fetch_script.js loaded')

let url_posts = 'https://jsonplaceholder.typicode.com/posts';
let url_comments = 'https://jsonplaceholder.typicode.com/comments';
let url_albums = 'https://jsonplaceholder.typicode.com/albums';
let url_photos = 'https://jsonplaceholder.typicode.com/photos';
let url_todos = 'https://jsonplaceholder.typicode.com/todos';
let url_users = 'https://jsonplaceholder.typicode.com/users';

// create the fetch function
async function goFetch(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// for each url variable above, call the fetch function in a console.log
(async () => {
console.log(await goFetch(url_posts));
console.log(await goFetch(url_comments));
console.log(await goFetch(url_albums));
console.log(await goFetch(url_todos));
console.log(await goFetch(url_users));

// from the photos url, put 2 random photos into the img elements in the html
let photos = await goFetch(url_photos);
let randomphotos = photos.sort(() => 0.5 - Math.random()).slice(0, 2);
// to see the results, right click on the page and click inspect, and click the console tab
console.log(randomphotos);

//display the two random photos
document.getElementById('photo1').src = randomphotos[0].url;
document.getElementById('photo2').src = randomphotos[1].url;
})();