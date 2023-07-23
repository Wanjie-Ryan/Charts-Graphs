import React,{useState} from 'react'
// import LCEX from '../src/components/Linechart-EX/linechart-ex'
import BarChart from '../src/components/Barchart/barchart'
import {userData} from '../src/Data/data'


function App() {

  const [userdata ,setUserData] = ({

    labels:userData.map((data)=> data.year),

    datasets:[{

      label:'User Gains Per year',
      data:userData.map((data)=>data.userGain)

    }]
  })





  return (


    <>

      {/* <LCEX /> */}


      <BarChart chartData={userdata} />




    
    
    
    </>


  )
}

export default App