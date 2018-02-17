class Configurations {

  static dealGraphData = () => {
    return {
      labels: [],
      datasets: [
        {
          id: 'orders',
          label: 'Order count',
          yAxisID: 'count',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(47, 64, 80, 0.5)',
          borderColor: 'rgba(41,56,70,1)',
          borderWidth: 1
        },
        {
          id: 'revenue',
          label: 'Order revenue($)',
          yAxisID: 'revenue',
          data: [550, 400, 155, 100, 60, 250],
          type: 'line'
        },
      ]
    };
  };

  static dealGraphOptions = () => {
    return {
      scales: {
        yAxes: [
          {
            id: 'count',
            type: 'linear',
            position: 'left',
            gridLines: {
              display: false
            },
          },
          {
            id: 'revenue',
            type: 'linear',
            position: 'right',
            gridLines: {
              display: false
            },
          }
        ]
      }
    };
  }
}


export default Configurations;