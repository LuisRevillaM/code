function tournamentWinner(competitions, results) {
  const scoreBoard = competitions.reduce((out, match) => {
    const home = match[0];
    const away = match[1];

    console.log(out[home]);
    if (!out[home]) {
      out[home] = 0;
    }

    if(!out[away]) {
      out[away] = 0;
    }

    return out;

  }, {});

  for(let i = 0; i< results.length; i++) {
    const homeTeam = competitions[i][0];
    const awayTeam = competitions[i][1];

    const winner = results[i] == 1 ? homeTeam : awayTeam;

    scoreBoard[winner] = scoreBoard[winner] + 3
  }

  let leader = {
    team: "",
    score: 0
  };

  for (const [team, score] of Object.entries(scoreBoard)) {
    if (score > leader.score) {
      leader.team = team;
      leader.score = score;
    }
  }

  return leader.team;
}

const competitions = [
  ["mad", "bar"],
  ["bar", "atl"],
  ["atl", "mad"]
];

const results = [0, 0, 1];

console.log(tournamentWinner(competitions, results))