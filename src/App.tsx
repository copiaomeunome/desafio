import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import React,{useState} from 'react';
const server:podcastType= require('./server.json');
type podcastType={
    episodes:[{
        id:string;     
        title: string;
        members:string;
        published_at: string;
        thumbnail:string;
        description :string;
        selected:string,
        file: {
            url:string,
            type:string,
            duration:string
        }
    }]
}
type EpisodesProps ={
  value1:string;
  value2:string;
  func1:Function;
  func2:Function;
};
type TrackContextType ={
  EpisodeId:number;
  setEpisodeId:Function
}
export const TrackContext = React.createContext({} as TrackContextType);


function App() {
  const [objectTrackContext, setObjectTrackContext] = useState(3);
  const [noPlayingClass,setNoPlayingClass]=useState('noPlayingShow');
  const [episodePlayingClass,setEpisodePlayingClass]=useState('playingClassHide');

  const ChangeCurrentPlaying=(episodeId:number,episodesProps:EpisodesProps)=>{
    
    let buttons=document.querySelectorAll('button');
    episodesProps.func1('noPlayingHide');
    episodesProps.func2('playingClassShow');
    buttons.forEach(function (element, index, array){
      element.disabled = false;
    });
    
    
    server.episodes[episodeId].selected='true';
    for(let i=0;i<server.episodes.length;i++){
        if(i!==episodeId){
            server.episodes[i].selected='false';
        }
    }
    for(let i=0;i<server.episodes.length;i++){
      if(server.episodes[i].selected==='true'){
        setObjectTrackContext(i);
      }
    }
  }
  return (
    <BrowserRouter>
      <TrackContext.Provider value={{EpisodeId:objectTrackContext, setEpisodeId:setObjectTrackContext}}>
        <Routes>
          <Route path="/" element={<Home ChangeCurrentPlaying={ChangeCurrentPlaying} value1={noPlayingClass} value2={episodePlayingClass} func1={setNoPlayingClass} func2={setEpisodePlayingClass}/>}/>
        </Routes>
      </TrackContext.Provider>
    </BrowserRouter>
  );
}

export default App;