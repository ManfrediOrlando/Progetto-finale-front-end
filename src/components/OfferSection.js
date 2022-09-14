import React from "react";
import { OfferCard } from "./OfferCard";

export function OfferSection({ user }) {
  return (
    <section className="footer-cards-gradient">
      <div className="row">
        <div className="col-10 col-md-3 d-flex justify-content-center mb-5 mx-auto">
          <OfferCard user={user} />
        </div>
        <div className="col-10 col-md-3 d-flex justify-content-center mb-5 mx-auto">
          <OfferCard user={user} specialoffer={true} />
        </div>
      </div>
    </section>
  );
}
