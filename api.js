
const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    //  clear data
    searchField.value= '';
    // error handle
    if(searchText == ''){
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').innerHTML =`<h3 >Please give a book name !!!</h3>`
    }
    else{
        // load data
        const url = `https://openlibrary.org/search.json?q=${searchText}`
        // console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data =>displaySearchResult(data.docs));
    }

}

// display result in cards
const displaySearchResult = books => {
// console.log(books);

// error messege remove
document.getElementById('error-message').style.display = 'none';

const searchResult = document.getElementById('search-result');

// search clear
searchResult.textContent = '';
if(books.length == 0){
    searchResult.innerHTML =`<h2 class=" m-5 text-white mx-auto fw-bold"> NO RESULT FOUND </h2>`;
}
else{
      // Retrieve each book and display in a card
    books.forEach(book => {
        // console.log(book);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
          <div class=" "> <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top img-fluid mx-auto p-4 rounded" alt="...">
          </div> 
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <h6 class="card-title">Author : ${book.author_name}</h6>
            <p class="card-title"><b> Published : </b>${book.publish_date[0]}</p>
            <p class="card-text"><b>Publisher-</b><i>${book.publisher}</i></p>
        </div>
      </div>
        `;
        searchResult.appendChild(div);
    });
    };
};

