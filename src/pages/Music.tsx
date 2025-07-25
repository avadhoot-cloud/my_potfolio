import React from 'react';
import './Music.css';
import oneDirectionCover from '../images/one_direction_midnight_memories.webp';
import brunoMarsCover from '../images/bruno_mars_24k_magic.webp';
import natashaCover from '../images/natasha_bedingfield_unwritten.webp';
import arijitCover from '../images/arijit_singh.webp';
import abhijeetCover from '../images/abhijeet.webp';
import edSheeranCover from '../images/ed_sheeran_divide.webp';
import taylorSwiftCover from '../images/taylor_swift_1989.webp';
import duaLipaCover from '../images/dua_lipa_future_nostalgia.webp';
import justinBieberCover from '../images/justin_bieber_purpose.webp';
import shawnMendesCover from '../images/shawn_mendes_illuminate.webp';

const genres = [
  'Feel Good',
  'Romantic Hits',
  'Pop Anthems',
  'Bollywood Magic',
  'Party Starters',
  'Heartfelt',
];

const songs = [
  // One Direction
  { title: 'What Makes You Beautiful', artist: 'One Direction', genre: 'Pop Anthems', imgSrc: oneDirectionCover },
  { title: 'Story of My Life', artist: 'One Direction', genre: 'Feel Good', imgSrc: oneDirectionCover },
  { title: 'Drag Me Down', artist: 'One Direction', genre: 'Party Starters', imgSrc: oneDirectionCover },
  { title: 'Night Changes', artist: 'One Direction', genre: 'Romantic Hits', imgSrc: oneDirectionCover },
  { title: 'Best Song Ever', artist: 'One Direction', genre: 'Party Starters', imgSrc: oneDirectionCover },
  // Bruno Mars
  { title: 'Uptown Funk', artist: 'Bruno Mars', genre: 'Party Starters', imgSrc: brunoMarsCover },
  { title: 'Just the Way You Are', artist: 'Bruno Mars', genre: 'Romantic Hits', imgSrc: brunoMarsCover },
  { title: '24K Magic', artist: 'Bruno Mars', genre: 'Feel Good', imgSrc: brunoMarsCover },
  { title: 'Grenade', artist: 'Bruno Mars', genre: 'Heartfelt', imgSrc: brunoMarsCover },
  { title: 'Locked Out of Heaven', artist: 'Bruno Mars', genre: 'Pop Anthems', imgSrc: brunoMarsCover },
  // Natasha Bedingfield
  { title: 'Unwritten', artist: 'Natasha Bedingfield', genre: 'Feel Good', imgSrc: natashaCover },
  { title: 'Pocketful of Sunshine', artist: 'Natasha Bedingfield', genre: 'Feel Good', imgSrc: natashaCover },
  { title: 'These Words', artist: 'Natasha Bedingfield', genre: 'Pop Anthems', imgSrc: natashaCover },
  { title: 'Soulmate', artist: 'Natasha Bedingfield', genre: 'Heartfelt', imgSrc: natashaCover },
  { title: 'Single', artist: 'Natasha Bedingfield', genre: 'Party Starters', imgSrc: natashaCover },
  // Arijit Singh
  { title: 'Tum Hi Ho', artist: 'Arijit Singh', genre: 'Bollywood Magic', imgSrc: arijitCover },
  { title: 'Channa Mereya', artist: 'Arijit Singh', genre: 'Heartfelt', imgSrc: arijitCover },
  { title: 'Raabta', artist: 'Arijit Singh', genre: 'Romantic Hits', imgSrc: arijitCover },
  { title: 'Agar Tum Saath Ho', artist: 'Arijit Singh', genre: 'Bollywood Magic', imgSrc: arijitCover },
  { title: 'Muskurane', artist: 'Arijit Singh', genre: 'Heartfelt', imgSrc: arijitCover },
  // Abhijeet
  { title: 'Main Koi Aisa Geet Gaoon', artist: 'Abhijeet', genre: 'Bollywood Magic', imgSrc: abhijeetCover },
  { title: 'Wada Raha Sanam', artist: 'Abhijeet', genre: 'Romantic Hits', imgSrc: abhijeetCover },
  { title: 'Chand Taare', artist: 'Abhijeet', genre: 'Feel Good', imgSrc: abhijeetCover },
  { title: 'Ole Ole', artist: 'Abhijeet', genre: 'Party Starters', imgSrc: abhijeetCover },
  { title: 'Badi Mushkil Hai', artist: 'Abhijeet', genre: 'Bollywood Magic', imgSrc: abhijeetCover },
  // Hollywood Popular
  { title: 'Shape of You', artist: 'Ed Sheeran', genre: 'Pop Anthems', imgSrc: edSheeranCover },
  { title: 'Perfect', artist: 'Ed Sheeran', genre: 'Romantic Hits', imgSrc: edSheeranCover },
  { title: 'Blank Space', artist: 'Taylor Swift', genre: 'Pop Anthems', imgSrc: taylorSwiftCover },
  { title: 'Levitating', artist: 'Dua Lipa', genre: 'Party Starters', imgSrc: duaLipaCover },
  { title: 'Love Yourself', artist: 'Justin Bieber', genre: 'Heartfelt', imgSrc: justinBieberCover },
  { title: 'Stitches', artist: 'Shawn Mendes', genre: 'Feel Good', imgSrc: shawnMendesCover },
];

const Music: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = React.useState<string | null>(null);
  const displayedSongs = selectedGenre
    ? songs.filter(song => song.genre === selectedGenre)
    : songs;

  return (
    <div className="music-page">
      <div className="quote">
        <p>Music isn’t just a genre, it’s a way of life. 🎸</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Genre</h3>
        <div className="genres">
          {genres.map((genre, index) => (
            <div
              key={index}
              className={`genre-card${selectedGenre === genre ? ' selected' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedGenre(selectedGenre === genre ? null : genre)}
            >
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Top Songs</h3>
        <div className="albums">
          {displayedSongs.map((song, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <img src={song.imgSrc} alt={song.title} className="album-image" />
              <div className="album-details">
                <h4>{song.title}</h4>
                <p>by {song.artist}</p>
                <span className="album-genre">{song.genre}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
