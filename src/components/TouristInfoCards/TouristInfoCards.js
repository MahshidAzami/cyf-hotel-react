import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-group">
      <div className="card">
        <img
          className="card-img-top"
          src="https://worldspanmedia.s3.amazonaws.com/media/sesam2/gallery/meetings/glasgow-city.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/">
            <h5 className="card-title">Glasgow</h5>
          </a>
          <p className="card-text">
            As Scotland’s largest city, Glasgow is famed for its culture,
            shopping and people. Spend your day exploring a wide range of
            fascinating free museums and galleries, enjoying the UK’s best
            shopping outside of London, and taking advantage of tips from
            friendly local people.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://gq-images.condecdn.net/image/RjJGypn3kVz/crop/405/landscape/f/Manchester-HP-GQ-8Mar17_istock_b.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <a href="https://www.visitmanchester.com/">
            <h5 className="card-title">Manchester</h5>
          </a>
          <p className="card-text">
            Manchester city centre is jam-packed with unique and eclectic
            restaurants, bars, shops, museums, galleries, hotels and places to
            stay whilst the surrounding Greater Manchester boroughs offer a
            patch-work of visitor experiences including quaint market towns,
            traditional pubs and beautiful green spaces and waterways to be
            explored on foot or bike.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com/">
            <h5 className="card-title">London</h5>
          </a>
          <p className="card-text">
            Welcome to Visit London, your official city guide to London,
            England. Find things to do in London, days out in London, London
            attractions and sightseeing, what's on, London events, theatre,
            tours, restaurants and hotels in London. Plan your trip to London
            with useful traveller information.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
