import Header from "../components/header";
import { useEffect } from "react";

function home() {
  useEffect(() => {
    const data = async () => {
      const Data = (await import("axios")).default;
      Data.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
        console.log(res.data);
      });
    };
    data();
  },[]);


  return (
    <>
      <Header />
      <div>home</div>
    </>
  );
}

export default home;
