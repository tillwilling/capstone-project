import styled from 'styled-components/macro'

export default function GameDetails({ game, platform }) {
  console.log(game)
  return (
    <DetailsWrapper>
      <Cover>
        <img src={game.background_image} alt="" />
        <p>Released: {game.released}</p>
        <h2>{game.name}</h2>
      </Cover>

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
    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`
  display: grid;
`

const StoresWrapper = styled.div`
  margin-top: 4px;
  padding: 8px;
  color: #ffe400;
`

const PlatformsWrapper = styled.div`
  padding: 8px;
  color: #ffe400;
`

const GenresWrapper = styled.div`
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
    position: absolute;
    bottom: 0;
    background: transparent;
    color: whitesmoke;
    font-size: 0.8rem;
  }

  h2 {
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
  display: flex;
  gap: 10px;
  padding: 10px;
  list-style: none;
  color: whitesmoke;
`

const SingleStore = styled.li``

const Platforms = styled.ul`
  font-size: 1rem;
  flex-wrap: auto;
  gap: 10px;
  padding: 10px;
  list-style: none;
  color: whitesmoke;
`

const SinglePlatform = styled.li``

const Genres = styled.ul`
  font-size: 1rem;
  display: flex;
  gap: 10px;
  padding: 10px;
  list-style: none;
  color: whitesmoke;
`

const SingleGenre = styled.li``

const Screenshots = styled.ul`
  margin: 0 10px 0 10px;
  width: 100%;
  display: flexbox;
  padding: 0;
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
