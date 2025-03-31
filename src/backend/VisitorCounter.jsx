import { useEffect, useState } from "react";
import axios from "axios";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await axios.get("http://localhost:8081/visit");
        setVisitCount(response.data.count);
      } catch (error) {
        console.error("Error fetching visit count:", error);
      }
    };

    fetchVisitCount();
  }, []);

  return <h1>網站總訪問次數：{visitCount}</h1>;
};

export default VisitCounter;
