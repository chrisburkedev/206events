import React, { Component } from 'react';
import './nav.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import Scrollspy from 'react-scrollspy';
import MediaQuery from 'react-responsive'

const SERVICESNAV = "services"

const Menu = ({ items, className, onClick, currentNav }) => (
  <div className={className}>
    {items.map((item, i) => {
      let navItem = (item === SERVICESNAV || item === "services") ? "events-services" : item;
      if (item === "portal") {
        return <a href="https://hello.dubsado.com:443/public/client/portal/5b98038e2e388126ea2c13aa" className="nav-item" target="blank" key={i}>{item}</a>
      }
      return <AnchorLink className={currentNav === navItem ? "nav-item current" : "nav-item"} href={`#${navItem}`} key={i} onClick={onClick} offset='50'>{item}</AnchorLink>
    })
    }
  </div >
)

function getOffset(el) {
  var _x = 0;
  var _y = 0;
  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    _x += el.offsetLeft - el.scrollLeft;
    _y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }
  return { top: _y, left: _x };
}

let events;
let reviews;
let gallery;
let contact;

class Nav extends Component {
  state = {
    activeClass: null,
  }
  componentDidMount() {
    let highlightMenuItem;
    window.addEventListener("resize", this.getOffsets);
    window.addEventListener('scroll', () => {
      if (window.scrollY >= events && window.scrollY < reviews) {
        highlightMenuItem = "events-services"
      } else if (window.scrollY >= reviews && window.scrollY < gallery) {
        highlightMenuItem = "reviews"
      } else if (window.scrollY >= gallery && window.scrollY < contact) {
        highlightMenuItem = "gallery"
      } else if (window.scrollY > contact) {
        highlightMenuItem = "contact"
      } else {
        highlightMenuItem = null
      }
      this.setState({
        activeClass: highlightMenuItem,
      });
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', false);
    window.removeEventListener('resize', false);
  }

  getOffsets = () => {
    // TODO: simplify and DRY this logic
    events = getOffset(document.getElementById('events-services')).top - 60;
    reviews = getOffset(document.getElementById('reviews')).top - 60;
    gallery = getOffset(document.getElementById('gallery')).top - 60;
    contact = getOffset(document.getElementById('contact')).top - 60;
  }

  render() {
    this.getOffsets();
    return (
      <nav className="navigation">
        <MediaQuery query="(max-width: 767px)">
          <Menu items={["services", "gallery", "contact", "portal"]} className="menu-items" onClick={this._handleMenuClick} currentNav={this.state.activeClass} />
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <Menu items={[SERVICESNAV, "reviews", "gallery", "contact", "portal"]} className="menu-items" onClick={this._handleMenuClick} currentNav={this.state.activeClass} />
        </MediaQuery>
      </nav>
    );
  }
}

export default Nav;