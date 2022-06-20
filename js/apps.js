// get input search Button Value
const inputValue = () =>{
    const songInput = document.getElementById('song-valu').value;
    const songData = async data => {
        
        const url = await fetch(`https://api.lyrics.ovh/suggest/${data}`)
        const response = await url.json()
        songInfo(response.data)
       
        
    }
    songData(songInput)
    // SOng Data Info
    const songInfo = data =>{
        const songDetails = document.getElementById('song-details');
        songDetails.innerHTML="";
        data.forEach((song) => {
            const title =song.title;
            const artist =song.artist;
            
            const preview = song.preview;
          
            const artistName = song.artist.name;
            const songDetailsDiv = document.createElement('div')
           
            songDetailsDiv.className = 'search-result col-md-8 mx-auto py-4';
            const songinfo = `
            
            <div class="single-result row align-items-center my-3 p-3">
                    <div class="col-md-9">
                        <h3 class="lyrics-name">${title}</h3>
                        <p class="author lead">Album by <span>${artistName}</span></p>
                        <audio src="${preview}" controls></audio>
                    </div>
                    <div class="col-md-3 text-md-right text-center">
                        <button onclick="songLyric('${artistName}','${title}')" class="btn btn-success">Get Lyrics</button>
                    </div>
            </div>
            
            `
            
            songDetailsDiv.innerHTML = songinfo;
            songDetails.appendChild(songDetailsDiv);
            
        })
    }
}   // Lyric Button Function
   const songLyric = async (artest,title) =>{
    const geturl = await fetch(`https://api.lyrics.ovh/v1/${artest}/${title}`)
    const lyricUrl = await geturl.json()
    const lyricText = document.getElementById('lyric')
    lyricText.innerText ='';
    lyricText.innerText = lyricUrl.lyrics;
   
    

    
   }