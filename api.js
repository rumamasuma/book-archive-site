const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value= '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data =>displaySearchResult(data.docs));
}
const displaySearchResult = books => {
// console.log(books);
const searchResult = document.getElementById('search-result');
books.forEach(book => {
    console.log(book);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card h-100">
       <img src="..." class="card-img-top" alt="..."> 
      <div class="card-body">
        <h5 class="card-title">${book.title}</h5>
        <h5 class="card-title">${book.author_name}</h5>
        <h5 class="card-title">${book.publish_date[0]}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
    `;
    searchResult.appendChild(div);
})

}