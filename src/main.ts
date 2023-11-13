import { AllQuotes } from './quotes';
import './style.css'

/*
function load()
{
   //the server url
  //quotes.json load
 //potentionally slow the fetch command ( the promise object is a helper object)
  //the "then" method runs after the fetch is finished
  //async programming
 fetch("quotes.json").then(eredmeny => {   
  if(!eredmeny.ok)
  {
    throw new Error('Hiba történt a letöltés közben')
  }
  return eredmeny.json();   //we need what the json file has
  }).then(tartalom => {
    console.log(tartalom.quotes[0].quote);
  });
}*/

async function kamera()
{
  try{
  let videoElem = document.getElementById('video') as HTMLVideoElement;
  videoElem.srcObject = await navigator.mediaDevices.getUserMedia({video: true});
  videoElem.addEventListener('loadedmetadata', () =>{
    videoElem.play();
  })
}
catch(e){
  console.log('No camera gang');
}
}



document.addEventListener('DOMContentLoaded', load);

async function load()
{
  let eredmeny = await fetch('quotes.json');
  if(!eredmeny.ok)
  {
    throw new Error('Hiba történt a letöltés közben')
  }
  let tartalom = await eredmeny.json() as AllQuotes;    //ha megadjuk a típusát akkor tudunk használni kódkiegészítést és kiítrja ha van hiba
  tartalom.quotes[1].quote;
  console.log(tartalom.quotes[0].quote);
  kamera();
}