import React from 'react';
import MovieQuestMural from "../app/images/moviequest_mural.gif"

const Home = () => {
  return (
    <div>
      <section className="section">
        <div className="container">

          <h1 className="title is-size-1 has-text-weight-bold has-text-link-dark  has-text-centered">MovieQuest</h1>
          <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
          </h2>

          <img src={MovieQuestMural} className="img_responsive" alt="MovieQuest Movie Search" title="MovieQuest Movie Search" />


          <p>Black jack stern hogshead American Main fire in the hole pillage scurvy. </p>
          <p>Heave to capstan Plate Fleet aft fathom scallywag gibbet. To go on account boom topsail league brig bilge schooner. </p>
          <br />
        </div>
      </section>
    </div>
  )
}

export default Home