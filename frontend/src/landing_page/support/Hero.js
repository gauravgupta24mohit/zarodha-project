import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="  p-3 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className=" row p-5 m-3">
        <div className=" col-6 p-5 "> 
            <h1 className="fs-3">Search for  an answer or browse help topics to create a ticket </h1>
            <input placeholder="Eg. how do I activate F&O" /> <br/>
            <a href="" style={{ textDecoration: "none" }}>Track account opening</a>
            <a href="" style={{ textDecoration: "none" }}>Track segment activation</a>
            <a href="" style={{ textDecoration: "none" }}>Intraday margins</a>
            <a href="" style={{ textDecoration: "none" }}>Kite user manual</a>

        </div>
        <div className=" col-6 mt-5 mb-5 p-5">
            <h1>Featured </h1>
            <ol>
              <li><a href="" style={{ textDecoration: "none" }}>Current Takeover and Delisting - January 2024</a> </li>
              <li><a href="" style={{ textDecoration: "none" }}>Latest Intraday leverages - MIS & CO</a></li>
            </ol>

        </div>
        
      </div>
    </section>
  );
}

export default Hero;
