import React , { useEffect, useState } from "react";
import SearchBar from "./Component/SearchBar";
import VideoDetail from "./Component/VideoDetail";
import VideoList from "./Component/VideoList";
import useVideo from "./hooks/useVideo";

const App = () => {
  
  const [videoSelect,setSelectedVideo] = useState(null);
  const [videos,search] = useVideo('tech');

  useEffect(()=>{
    setSelectedVideo(videos[0]);
  },[videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit = {search}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={videoSelect} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect = {setSelectedVideo} videos = {videos} /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;