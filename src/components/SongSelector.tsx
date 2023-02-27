import React, {useState} from 'react';

const GENRES = ['Pop', 'EDM', 'Rock']

const OPTIONS = {
  Pop: ["A-team", "Pop2", "Pop3"],
  EDM: ["EDM1", "EDM2", "EDM"],
  Rock: ["Rock1", "Rock2", "Rock3"],
}

const isGenreChecked = (genre, songSelections) =>{
  return OPTIONS[genre].every((song) => songSelections[song])
}

const SongSelector = () => {
  const [songSelections, setSongSelections] = useState({}); 


  const onSelectSong = (songName) => {
    return (e) => {
      setSongSelections({ ...songSelections, [songName]: e.target.value})
    }
  }

  const onSelectGenre = (genre: string) => {
    return (e: any) => {
      const newSongSelections = { ...songSelections};
    OPTIONS[genre].forEach((song) => (newSongSelections[song] = e.target.checked))

      setSongSelections(newSongSelections)
    };
  };


  const GenreOption = ({ genre }) => (
    <div style={{ display: 'flex', }}>
      <input type="checkbox" style={{ marginRight: '10px' }} checked={isGenreChecked(genre, songSelections)} onChange={onSelectGenre(genre)}/>
      <h1>{genre}
      </h1>
    </div>
  )

  const SongOption = ({ song }) => (
    <div style={{ display: 'flex'}}>
      <input //
        type="checkbox"
        checked={Boolean(songSelections[song])}
        onChange={onSelectSong(song)}
        value={song}
      />
      <h3>
        {song}
      </h3>
    </div>
  )

  return (
    <div  style={{ padding:'60px'}}>
      {GENRES.map((genre) => (
        <div key={Math.random().toString()}>
          <GenreOption genre={genre} />
          {
            OPTIONS[genre].map((song) => (
              <SongOption key={Math.random().toString()} song={song}/>
            ))
          }
        </div>
      ))}
    </div>
  );
};


export default SongSelector;
