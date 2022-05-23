export const getSneakers = {
  method: 'GET',
  url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
  params: { limit: '100' },
  headers: {
    'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
    'X-RapidAPI-Key': '6232072bfcmsh9f689b9fa891f7fp141d7ajsn235e332550ec'
  }
};

let sneakerId;

export const getSneakersById = {
  method: 'GET',
  url: `https://the-sneaker-database.p.rapidapi.com/sneakers/${sneakerId}`,
  headers: {
    'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com',
    'X-RapidAPI-Key': '6232072bfcmsh9f689b9fa891f7fp141d7ajsn235e332550ec'
  }
};

