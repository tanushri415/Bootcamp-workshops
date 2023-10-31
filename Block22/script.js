const API_BASE_URL =
  'https://fsa-async-await.herokuapp.com/api/guided-practice';
const API_SONGS_URL = `${API_BASE_URL}/songs`;

const fetchAllSongs = async () => {
  try {
    const res = await fetch(`${API_SONGS_URL}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};

function renderSong(song) {
  const songElement = document.createElement('h2');
  songElement.innerText = song.title;
  return songElement;
}

function renderAllSongs(songs) {
  const songContainer = document.querySelector('#song-container');
  songContainer.innerHTML = '';
  songs.forEach((song) => {
    const songElement = renderSong(song);
    songContainer.append(songElement);
  });
}
async function addNewSong(song) {
  console.log(song);

  const response = await fetch(`${API_SONGS_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(song),
  });
  console.log(response);
  const newSong = await response.json();
  return newSong;
}
const renderNewSongForm = async () => {
  console.log('coming here');
  const newSongForm = document.querySelector('#new-song-form');
  const formElement = document.createElement('form');
  formElement.innerHTML = `
  
    <label for="song-title">Title</label>
    <input type="text" name="song-title" id="song-title"/>
    
    <label for="song-artist">Artist</label>
    <input type="text" name="song-artist" id="song-artist"/>
    
    <label for="song-genre">Genre</label>
    <input type="text" name="song-genre" id="song-genre"/>
    
    <label for="song-release-date">Release Date</label>
    <input type="date" name="release-date" id="song-release-date"/>
    
    <button type="submit">Add Song</button>`;

  formElement.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.querySelector('#song-title').value;
    const artist = document.querySelector('#song-artist').value;
    const genre = document.querySelector('#song-genre').value;
    const releaseDate = document.querySelector('#song-release-date').value;

    const songData = {
      title,
      artist_id: artist,
      genre_id: genre,
      release_date: releaseDate,
    };

    const newSong = await addNewSong(songData);
    const songs = await fetchAllSongs();
    renderAllSongs(songs);
  });
  newSongForm.appendChild(formElement);
};

async function init() {
  const songs = await fetchAllSongs();
  renderAllSongs(songs);
  renderNewSongForm();
  //   console.log(renderSong);
}

init();
