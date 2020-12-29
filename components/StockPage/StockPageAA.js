import React, { Component } from "react";

class ApiCall extends Component {
  constructor() {
    super();
    this.state = {
      todo: {}
    };
  }

  componentWillMount() {
    const [stockData, setStockData] = React.useState('');
    fetch("https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=TSLA", {
	    "method": "GET",
	    "headers": {
		    "x-rapidapi-key": "6344837b96msh4dd4d2909be9cbbp1320a9jsn673352df54c6",
		    "x-rapidapi-host": "alpha-vantage.p.rapidapi.com"
	    }
    })
    .then(response => response.json())
    .then(data => {         
        //console.log(data);
        setStockData(data);
    })
    .catch(err => {
        console.log(err);
    });
  }

  render() {
    return (
      <div>
        <p>API call :</p>
        Todo title : <p>{stockData}</p>
      </div>
    );
  }
}

export default ApiCall;