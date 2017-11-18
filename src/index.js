import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
// import YTSearch from "youtube-api-search";
// import SearchBar from "./components/search_bar";
// import VideoList from "./components/video_list";
//import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));