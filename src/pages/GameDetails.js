import styled from 'styled-components/macro'

export default function GameDetails({ game }) {
  console.log(game)
  return (
    <DetailsWrapper>
      <Cover>
        <img src={game.background_image} alt="" />
        <h1>{game.name}</h1>
      </Cover>

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

const Cover = styled.div`
  display: grid;
  align-items: center;
  text-align: center;

  img {
    max-width: 100vw;
  }

  h1 {
    border-top: 1px whitesmoke ridge;
    border-bottom: 1px whitesmoke ridge;
    padding: 8px;
    color: #e0dfdc;
    background: #c3073f;
    letter-spacing: 0.1em;
    text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c,
      0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424,
      0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c,
      0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414,
      0 15px 0 #121212, 0 22px 30px rgba(0, 0, 0, 0.9);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
`

const Screenshots = styled.ul`
  width: 100%;
  display: flexbox;
  padding: 0;
  list-style: none;
  gap: 20px;
  font-size: 1.8rem;
  margin-top: 50px;
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
