// This function loads pokemon data from the Pokemon API
function chuckNorrisJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
  const url = `https://api.chucknorris.io/jokes/random`;
  axios.get(url)
    .then(response => response.data) // DIFFERENT FROM FETCH: response.data instead of response.json()
    .then(chuck => { {
      console.log('data decoded from JSON:', chuck);
      // Build a block of HTML
      const chuckHtml = `
        <img src="${chuck.icon_url}" />
        <p>${chuck.value}</p>
      `;
      document.querySelector('#chuck-norris').innerHTML = chuckHtml;
      document.getElementById("reload").addEventListener("click", function(){
      location.reload(true);
});
    }});
}


chuckNorrisJSON();
