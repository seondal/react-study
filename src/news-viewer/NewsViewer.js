import React, { useState } from "react";
import axios from "axios";
import NewsList from "./NewsList";

const NewsViewer = () => {
  const [data, setData] = useState(null);
  //   const onClick = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/todos/1")
  //       .then((response) => {
  //         setData(response.data);
  //       });
  //   };
  const onClick = async () => {
    try {
      const response = await axios.get(
        "http://newsapi.org/v2/top-headlines?country=kr&apiKey=648ef3c02f084600935fa77d2aa7bb11"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && (
    //     <textarea
    //       rows={7}
    //       value={JSON.stringify(data, null, 2)}
    //       readOnly={true}
    //     />
    //   )}
    // </div>
    <NewsList />
  );
};

export default NewsViewer;
