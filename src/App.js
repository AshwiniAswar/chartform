import './App.css'
import React, { useState } from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Pie } from 'react-chartjs-2';
Chart.register(ArcElement);


const ChartForm = () => {
  const [boxValue, setBoxValue] = useState({ box1: "", box2: "" });
  const [chartData, setChartData] = useState({});

  const handleBoxChange = (e) => {
    const { name, value } = e.target;
    setBoxValue((prevboxValue) => ({
      ...prevboxValue,
      [name]: value,
    }));
  };

  const handleCreateChart = () => {
    const { box1, box2 } = boxValue;
    const data = {
      labels: ["box1", "box2"],
      datasets: [
        {
          label: ["box1", "box2"],
          data: [box1, box2],
          backgroundColor: ["red", "blue"],
        },
      ],
    };
    setChartData(data);
  };

  return (
    <div>
      <div className='a'>
      <label> Box 1</label> 
        <input className='box1' type="text" name='box1' value={boxValue.box1} onChange={handleBoxChange} />
      </div>
      <div className='b'>
       <label>Box 2</label> 
        <input className='box2' type="text" name='box2' value={boxValue.box2} onChange={handleBoxChange} />
      </div>
      <div>
        <button className='button' onClick={handleCreateChart}>Create chart</button>
      </div>
      <div className='chart'>
        {chartData.datasets && <Pie data={chartData} />}
      </div>
    </div>
  );
};

export default ChartForm;
