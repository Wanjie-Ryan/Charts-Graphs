import React,{useState} from 'react'
// import LCEX from '../src/components/Linechart-EX/linechart-ex'
import BarChart from '../src/components/Barchart/barchart'
import {userData} from '../src/Data/data'
import {Chart as ChartJS} from 'chart.js/auto'
import LineChartEx from '../src/components/Linechart-EX/linechart-ex'


function App() {

  const [userdata ,setUserData] = useState({

    labels:userData.map((data)=> data.year),

    datasets:[{

      label:'User Gains Per year',
      data:userData.map((data)=>data.userGain),
      backgroundColor:[

        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0"
      ]

    }]
  })





  return (


    <>

      {/* <LCEX /> */}

      <div style ={{width:700}}>



        <BarChart chartData={userdata} />

      </div>


      <div style ={{width:700}}>

        < LineChartEx chartData ={userdata}/>
        
      </div>



    
    
    
    </>


  )
}

export default App