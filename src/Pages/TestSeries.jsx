import React from 'react'
import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"]
];

export default function TestSeries() {
  return (
    <div>
    <button className='border-2 border-black w-20 h-8'> Download</button>
    <br/>
    {/* <CSVDownload data={csvData} target="_blank" />; */}
    <CSVLink data={csvData}>Download me</CSVLink>;
    {/* <button>
    <CSVDownload data={csvData} target="_blank" />;
    </button> */}
    
      welcome to Test Series Page
    </div>
  )
}
