export default async function gameData(req, res) {
  const API_KEY = process.env.REACT_APP_API_KEY
  const query = req.query.gameData
  console.log(API_KEY, query)
  const response = await fetch(
    `https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`
  )
  const data = await response.data
  res.send(data)

  //   fetch(`https://api.rawg.io/api/games?key=${API_KEY}&search=${query}`)
  //     .then(res => res.json())
  //     .then(data => res.send(data.results))
  //     .catch(error => console.error(error))
}
