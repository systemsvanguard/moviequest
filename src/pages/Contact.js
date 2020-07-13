import React from 'react'
import HighPark from "../app/images/highpark.jpg"
import Spacer from "../app/images/spacer.png";
import GoogleMaps from "../components/GoogleMaps";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";


const Contact = () => {
  return (
    <div className="container">
      <h1 className="is-size-2 has-text-weight-bold has-text-link-dark  has-text-centered">Contact Us</h1>

        <p className="title has-text-link is-italic is-size-5 has-text-centered">
          <span className="icon has-text-link is-medium"> <i className="far fa-comment-dots fa-2x"></i></span>
          <img src={Spacer} alt="" />
          Let's talk! How can my web development & IT skills help you? Drop me a note below please.
        </p>


      <img src={HighPark} className="img_responsive" alt="High Park" title="High Park" />
			<p>Heave to capstan Plate Fleet aft fathom scallywag gibbet. To go on account boom topsail league brig bilge schooner.  Cat o'nine tails snow matey six pounders come about wherry. Davy Jones' Locker bring a spring upon her cable jack matey Yellow Jack measured fer yer chains. Scurvy Shiver me timbers long boat chase guns ahoy keel. Ahoy warp draft scourge of the seven seas rum yawl.</p><br />
      <p>Hands measured fer yer chains Jolly Roger Gold Road hornswaggle yard. Square-rigged quarterdeck Plate Fleet broadside yardarm bilge. Gangplank lanyard square-rigged parley measured fer yer chains lad. Piracy spanker careen heave to trysail dead men tell no tales. </p>

			<h1 className="is-size-3 has-text-weight-bold has-text-link-dark has-text-centered">Contact Details</h1>
			<br />

			<div className="columns">
				<div className="column is-one-third">
				<ContactDetails />
				</div>
				<div className="column">
				<ContactForm />
				</div>
			</div>

		  <GoogleMaps />
		  <br /><br /><br /><br /><br /><br /><br /><br /><br />

	</div>
  )
}

export default Contact
