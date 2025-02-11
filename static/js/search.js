/*  static/js/search.js
 *  handles functionality for the search component.
 */

const openSearch = () => {
  const openBtn = document.getElementById("search-open");
  const closeBtn = document.getElementById("search-close");
  const searchInput = document.getElementById("search-input");
  searchInput.style.display = "block";
  closeBtn.style.display = "block";
  openBtn.style.display = "none";
  searchInput.select();
}

const closeSearch = () => {
  const openBtn = document.getElementById("search-open");
  const closeBtn = document.getElementById("search-close");
  const searchInput = document.getElementById("search-input");
  searchInput.style.display = "none";
  closeBtn.style.display = "none";
  openBtn.style.display = "block";
}

const onSearchKey = (ele) => {
  if(event.key === 'Enter') {
    const searchInput = document.getElementById("search-input");
    searchInput.style.display = "none";
    const url = `https://github.com/search?q=repo%3Abashful-sh%2Fbashful+${encodeURIComponent(searchInput.value)}&type=code`;
    window.open(url, '_blank').focus();
    closeSearch();
  }
}
