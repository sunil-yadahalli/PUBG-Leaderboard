const players = [
  ["NunquamParatus", "Yangeance", "Potts"],
  ["Shanners", "ShaN-MaN", "LukeOcean"],
  ["Pundrick", "Kathoga", "TarJay"],
  ["SonOfLawrence", "Karangz", "TrackerPad"]
];

const brokenNames = ["Karangz", "TrackerPad", "TarJay", "SonOfLawrence"];

export default async function getPlayerDataAsync() {
  let playerData = [];
  const host = 'https://api.playbattlegrounds.com/shards/pc-eu/players?filter[playerNames]=';
  const headers = {
    'accept': 'application/vnd.api+json',
    'Authorization': secrets.API_TOKEN
  }
      
  for(let i = 0; i < players.length; i++){
    let response = await fetch(`${host}${players[i]}`, {headers: headers});
    let data = await response.json();
    console.log(data);
    playerData.push(data)
  }
  return playerData
}