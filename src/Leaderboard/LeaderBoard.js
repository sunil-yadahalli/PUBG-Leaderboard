import React from 'react';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import './LeaderBoard.css';

class LeaderBoard extends React.Component {

  render(){
    return (
      <div>
        <ReactTable
          className="-striped -highlight"
          data={this.props.playerData}
          columns={this.props.tableHeaders}
          showPagination={false}
          resizable={false}
          minRows={0}
          multiSort={false}
          defaultSorted={[{
            id: "rank",
            desc: false
          }]
        }
        />
      </div>
    );
  }
}

export default LeaderBoard;