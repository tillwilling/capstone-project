import styled from 'styled-components/macro'
import DOMpurify from 'dompurify'
import { Link } from 'react-router-dom'
import SpaceInvader from '../images/space_invader1.png'
import '@fontsource/play'

export default function GameDetails({ game }) {
  console.log(game)
  return (
    <DetailsWrapper>
      <StyledLink to="/">
        <img src={SpaceInvader} alt="" />
        go back
      </StyledLink>
      <Cover>
        <img src={game.background_image} alt="" />
        <p>Game release date: {game.released}</p>
        <h2>{game.name}</h2>
      </Cover>

      <WebsiteWrapper>
        <a href={game.website} target="_blank" rel="noreferrer">
          {/* {game.name} */}
          visit website
        </a>
      </WebsiteWrapper>

      <StoresWrapper>
        <h4>Available on:</h4>
        <Stores>
          {game.stores &&
            game.stores.map(store => (
              <SingleStore key={store.store.id}>{store.store.name}</SingleStore>
            ))}
        </Stores>
      </StoresWrapper>

      <PlatformsWrapper>
        <h4>Platforms:</h4>
        <Platforms>
          {game.platforms.map(platform => (
            <SinglePlatform key={platform.platform.id}>
              {platform.platform.name}
            </SinglePlatform>
          ))}
        </Platforms>
      </PlatformsWrapper>

      <GenresWrapper>
        <h4>Genre:</h4>
        <Genres>
          {game.genres.map(genre => (
            <SingleGenre key={genre.id}>{genre.name}</SingleGenre>
          ))}
        </Genres>
      </GenresWrapper>

      <Screenshots>
        {game.short_screenshots.map(screenshot => (
          <SingleScreenshot
            backgroundImage={screenshot.image}
            key={screenshot.id}
          ></SingleScreenshot>
        ))}
      </Screenshots>

      <DescriptionWrapper>
        <h4>About:</h4>
        <Description
          dangerouslySetInnerHTML={{
            __html: DOMpurify.sanitize(game.description),
          }}
        />
      </DescriptionWrapper>
    </DetailsWrapper>
  )
}

const StyledLink = styled(Link)`
  display: grid;
  position: fixed;
  justify-items: center;
  padding: 5px;
  margin: 20px;
  background: #00ff00;
  width: 40px;
  border-radius: 4px;
  font-family: 'Play';
  text-align: center;
  font-size: 0.8rem;
  text-decoration: none;
  color: #c3073f;
  font-weight: bold;
  box-shadow: 2px 5px 16px 0px #1a1a1d, 5px 5px 15px 5px rgba(0, 0, 0, 0);

  img {
    max-width: 25px;
    background: transparent;
  }
`

const WebsiteWrapper = styled.div`
  display: grid;
  justify-content: center;

  a {
    text-decoration: none;
    color: #4e4e50;
    font-family: 'Play';
    font-size: 0.9rem;
    font-weight: bold;
    padding: 6px 20px 6px 20px;
    margin: 10px 10px 0 0;
    background: whitesmoke;
    border-radius: 15px;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      5px 5px 15px 6px rgba(0, 0, 0, 0.3);
  }
`

const DetailsWrapper = styled.div`
  display: grid;
`

const StoresWrapper = styled.div`
  font-family: 'Play';
  margin-top: 4px;
  padding: 8px;
  color: #ffe400;
`

const PlatformsWrapper = styled.div`
  font-family: 'Play';
  padding: 8px;
  color: #ffe400;
`

const GenresWrapper = styled.div`
  font-family: 'Play';
  padding: 8px;
  color: #ffe400;
`

const DescriptionWrapper = styled.div`
  font-family: 'Play';
  padding: 8px;
  color: #ffe400;
`

const Cover = styled.div`
  display: grid;
  align-items: center;
  text-align: center;

  img {
    max-width: 100vw;
  }

  p {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 20px;
    background: transparent;
    color: green;
    font-family: 'Play';
    font-size: 0.8rem;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
  }

  h2 {
    font-family: 'Play';
    border-top: 1px whitesmoke dotted;
    border-bottom: 1px whitesmoke dotted;
    padding: 5px;
    color: #e0dfdc;
    background: #c3073f;
    letter-spacing: 0.1em;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 1);
  }
`

const Stores = styled.ul`
  font-size: 1rem;
  gap: 10px;
  padding: 10px;
  list-style: none;
  color: whitesmoke;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);
`

const SingleStore = styled.li``

const Platforms = styled.ul`
  font-size: 1rem;
  gap: 10px;
  padding: 10px;
  list-style: none;
  color: whitesmoke;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);
`

const SinglePlatform = styled.li``

const Genres = styled.ul`
  font-size: 1rem;
  display: flex;
  gap: 10px;
  padding: 10px;
  list-style: none;
  color: whitesmoke;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);
`

const SingleGenre = styled.li``

const Description = styled.p`
  font-size: 1rem;
  display: grid;
  gap: 10px;
  padding: 10px;
  list-style: none;
  color: whitesmoke;
`

const Screenshots = styled.ul`
  margin: 0 10px 0 10px;
  width: 100%;
  display: flexbox;
  padding: 5;
  list-style: none;
  gap: 20px;
  font-size: 1.8rem;
  overflow-x: scroll;
`

const SingleScreenshot = styled.li`
  padding: 20px;
  border-radius: 8px;
  color: whitesmoke;
  width: 300px;
  height: 150px;
  text-align: center;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);
  border: ridge whitesmoke;
  background-image: url(${props => props.backgroundImage});
  background-size: 300px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`
