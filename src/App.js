import React, { Component } from 'react';
// import logo from './logo.svg';
import './app.scss';
import './settings/slider.scss';

import Header from './components/Header';
import Services from './components/Services';
import Events from './components/Events';
import Reviews from './components/Reviews';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import MediaQuery from 'react-responsive'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <section id="about">
            <article className="content-container two-column-text">
              <p>206 Events is a Production and Entertainment Company providing A/V Services around the Greater Puget Sound Area. Offering award-winning Show Management, DJ and Emcee Talent, Performance Entertainment, Custom Lighting Design, and Professional Audio Installations to create spectacular Corporate Galas, Holiday Celebrations, Weddings and Parties for all Occasions. </p><p> With over two decades of experience, our team of professionals at 206 Events will work to bring your vision to life!  Meticulously executing details and seamlessly integrating our decor and AV elements to create a truly memorable experience for your guests.  Contact us and let’s get the planning process started today!</p>
            </article>
          </section>
          <section className="video-container">
            <a href="https://player.vimeo.com/video/303601824" target="_blank">
              <div className="vimeo-wrapper">
                <iframe
                  src="https://player.vimeo.com/video/303601824?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                  allow="autoplay"
                  frameBorder="0"
                  loop
                  autoPlay
                  autopause="true"
                  background="1"
                >
                </iframe>
              </div>
            </a>
          </section>
          <section id="events-services" className="med-background">
            <article className="content-container">
              <Services />
            </article>
          </section>
          <MediaQuery query="(min-width: 768px)">
            <section className="video-container">
              <a href="https://player.vimeo.com/video/304889534" target="_blank">
                <div className="vimeo-wrapper">
                  <iframe
                    src="https://player.vimeo.com/video/304889534?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
                    allow="autoplay"
                    frameBorder="0"
                    loop
                    autoPlay
                    autopause="true"
                    background="1"
                  >
                  </iframe>
                </div>
              </a>
            </section>
          </MediaQuery>
          <section className="dark-background no-padding">
            <article className="content-container">
              <Events />
            </article>
          </section>
          <section id="reviews" className="med-background">
            <Awards />
          </section>
          <section>
            <Reviews />
          </section>
          <section id="gallery" className="dark-background">
            <Gallery />
          </section>
          <section id="contact">
            <div className="contact content-container">
              <h1>Contact us for pricing and availability</h1>
              <iframe src="https://hello.dubsado.com:443/public/form/view/5b98038e2e388126ea2c13ae" frameBorder={0} width="100%" height={750} title="contact 206 events"/>
            </div>
          </section>
          <section id="footer">
            <Footer />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
