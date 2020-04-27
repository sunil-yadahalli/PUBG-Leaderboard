import React, { Component } from 'react';
import LeaderBoard from '../Leaderboard/LeaderBoard'
import logo from './images/logo.png';
import './App.css';

//const url = 'http://localhost:1234/api/players';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      siteName: 'PUBG Leaderboard',
      playerData: [{ 
        rank: 1,
        global_rank: 100,
        name: 'Nunquam Paratus',
        kills: 1337,
        deaths: 0,
        assists: 10,
        kill_death_ratio: 1337/0,
        knockdowns:10000,
        pan_kills:10
      },{ 
        rank: 3,
        global_rank: 2000,
        name: 'Player 2',
        kills: 100,
        deaths: 100,
        assists: 1000,
        kill_death_ratio: 1/1,
        knockdowns:1000,
        pan_kills:0
      },{ 
        rank: 2,
        global_rank: 1000000,
        name: 'Player 3',
        kills: 0,
        deaths: 50,
        assists: 10,
        kill_death_ratio: 0/50,
        knockdowns:30,
        pan_kills:0
      },{ 
        rank: 2,
        global_rank: 1000000,
        name: 'Player 3',
        kills: 0,
        deaths: 50,
        assists: 10,
        kill_death_ratio: 0/50,
        knockdowns:30,
        pan_kills:0
      },{ 
        rank: 2,
        global_rank: 1000000,
        name: 'Player 3',
        kills: 0,
        deaths: 50,
        assists: 10,
        kill_death_ratio: 0/50,
        knockdowns:30,
        pan_kills:0
      },{ 
        rank: 2,
        global_rank: 1000000,
        name: 'Player 3',
        kills: 0,
        deaths: 50,
        assists: 10,
        kill_death_ratio: 0/50,
        knockdowns:30,
        pan_kills:0
      },{ 
        rank: 2,
        global_rank: 1000000,
        name: 'Player 3',
        kills: 0,
        deaths: 50,
        assists: 10,
        kill_death_ratio: 0/50,
        knockdowns:30,
        pan_kills:0
      },{ 
        rank: 2,
        global_rank: 1000000,
        name: 'Player 3',
        kills: 0,
        deaths: 50,
        assists: 10,
        kill_death_ratio: 0/50,
        knockdowns:30,
        pan_kills:0
      },{ 
        rank: 2,
        global_rank: 1000000,
        name: 'Player 3',
        kills: 0,
        deaths: 50,
        assists: 10,
        kill_death_ratio: 0/50,
        knockdowns:30,
        pan_kills:0
      },{ 
        rank: 2,
        global_rank: 1000000,
        name: 'Player 3',
        kills: 0,
        deaths: 50,
        assists: 10,
        kill_death_ratio: 0/50,
        knockdowns:30,
        pan_kills:0
      },{ 
        rank: 2,
        global_rank: 1000000,
        name: 'Player 3',
        kills: 0,
        deaths: 50,
        assists: 10,
        kill_death_ratio: 0/50,
        knockdowns:30,
        pan_kills:0
      }],
      tableHeaders: [{
        Header: 'Rank',
        accessor: 'rank',
        minWidth: 50,
        defaultSortDesc: false
      },{
        Header: 'Global Rank',
        accessor: 'global_rank',
        minWidth: 100,
      },{
        Header: 'Player Name',
        accessor: 'name',
        minWidth: 200,
      },{
        Header: 'Total Kills',
        accessor: 'kills',
        minWidth: 120,
      },{
        Header: 'Total Deaths',
        accessor: 'deaths',
        minWidth: 120,
      },{
        Header: 'Total Assists',
        accessor: 'assists',
        minWidth: 120,
      },{
        Header: 'K:D Ratio',
        accessor: 'kill_death_ratio'
      },{
        Header: 'Knockdowns',
        accessor: 'knockdowns'
      },{
        Header: 'Kills w/ Pan',
        accessor: 'pan_kills'
      }]
    }
  }

  async componentDidMount(){
    //let response = await fetch(url);
    //let playerData = await response.json();
    //this.setState({
    //  playerData: [playerData]
    //});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section className="Section">
          <LeaderBoard playerData={this.state.playerData} tableHeaders={this.state.tableHeaders} />
        </section>
      </div>
    );
  }
}

export default App;
