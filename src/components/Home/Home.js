import React from "react";
import Details from "../Details/Details";

function Home() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Review Blog App</h2>

          <div className="underline"></div>
        </div>
        <Details />
      </section>
    </main>
  );
}

export default Home;
