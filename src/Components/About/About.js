import React from 'react';
import { Link } from 'react-router-dom';
// import "./About.css";

function About() {
  return (
    <div className="About-container">
      <h1 className="About-heading">Table 4 2 Wine Gallery Online Menu And Venue</h1>
      <h2>This is a Wine Gallery online Menue And Venue meant for online orders of wine and displaying of artworks created from art sessions in the Wine Gallery.
      It is mainly meant for Couples to share a romantic art and wine session with each other although you can also go alone or just with friends.
      It is a good experience for all.</h2>
      <h3>Customer Memberships</h3>
      <p>VIP Diamond Elite</p>
      <p>VIP Diamond</p>
      <p>Preffered</p>
      <p>General(Normal admission)</p>
      <h3>Wine Session Purchase Packages</h3>
      <p>VIP Diamond Elite Premium
Any session, Krug plus two other wines, three hors d'oeuvres.  
VIP Diamond Premium :
Any session, Krug one other wine, two hors d'oeuvres.  
Preferred Premium:
Any session three wines $20 and below, three hors d'oeuvres.  
Preferred Basic:
Any session, two wines $20 and below, two hors d'oeuvres.  
Five High Premium:
Five High Session, four wines $15 and below, three hors d'oeuvres.  
Five High Basic:
Five High Session, three wines $10 and below, two hors d'oeuvres.  
Double Duo Premium:
Double Duo Session, three wines $15 and below, three hors d'oeuvres.  
Double Duo Basic:
Double Duo Session, two wines $10 and below, two hors d'oeuvres.  
Double Team Premium:
Double Team Session, three wines $15 and below, three hors d'oeuvres.  
Double Team Basic:
Double Team Session, two wines $10 and below, two hors d'oeuvres.  
Triple Tribe Premium:
Triple Tribe Session, three wines $15 and below, three hors d'oeuvres.  
Triple Tribe Basic:
Triple Tribe Session, two wines $10 and below, two hors d'oeuvres.  
Lover's Duo Premium:
Lover's Duo Session, two wines $15 and below, two hors d'oeuvres.  
Lover's Duo Basic:
Lover's Duo Session, one wine $10 and below, one hors d'oeuvre.  
Together As One Premium:
Together As One Session, two wines $15 and below, two hors d'oeuvres.  
Together As One Basic:
Together As One Session, one wine $10 and below, one hors d'oeuvre.  
Simply Me Premium:
Simply Me Session, one wine $15 and below, two hors d'oeuvres.  
Simply Me Basic:
Simply Me Session, one wine $10 and below, one hors d'oeuvre.  
Any Session Premium:
Your choice of wine $15 and below and a session. Every session comes with wine.  
Any Session Basic:
Your choice of wine $10 and below and a session. Every session comes with wine.  
Wine:
Any wine. Price will vary according to the brand and type.</p>
      <Link className="about-link" to="/brandofwines">Show Me More!</Link>
    </div>
  )
 }
export default About;