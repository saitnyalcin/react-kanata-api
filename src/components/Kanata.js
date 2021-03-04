import React, { useEffect, useState } from "react";

export default function Kanata() {
  const [data, setData] = useState([]);

  async function callKanataApi() {
    await fetch(
      "https://us-central1-kanata-production.cloudfunctions.net/api/content"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    callKanataApi();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <img
          key={item.contentId}
          src={item.image}
          alt=""
          height="250px"
          width="250px"
          style={{ margin: "1em" }}
        />
      ))}
    </div>
  );
}
