import React from 'react'
import "../App.css"
import "./Home.css"
import chefAmma from "../assets/chef-amma.png";
import kolambu from "../assets/kolambu.png";
import chef from "../assets/chef.png";
import globe from "../assets/world.png"

function Home() {
  return (
    <>
        <div className="home--wrapper page--wrapper vertical--flex">
            <div className="top--text--home horizontal--flex">
              <div className="top--left--text--home">
                <p className='chef'>CHEF</p>
                <p className='chef--name italic bold'>Joseph Kuruvilla</p>
              </div>
              <div className="top--right--text--home">
                <p>AUTHENTIC<br/>MADRAS TASTE</p>
              </div>
            </div>

            <div className="grid--image--gallery">
              <img src={chefAmma} alt="lady--cook" className='chef--amma image--hover hover--effect'/>
              <img src={kolambu} alt="indian--gravy" className='kolambu image--hover hover--effect'/>
              <img src={chef} alt="main--cook" className='main--cook image--hover hover--effect'/>
              <div className="book--now hover--effect">
                <p className="italic bold--text">Book Now!</p>
              </div>
              <p className='highlight--text italic bold--text'>Namma Madras</p>
              <p className="copyright">Copyright by<br/>Tasteofmadras</p>
            </div>

            <div className="bottom--home--carousel horizontal--flex">
              <div className="delivery--partners--logo horizontal--flex">
                <p className="zomato">Zomato</p>
                <p className="swiggy">Swiggy</p>
              </div>
              <div className="locations horizontal--flex">
                <img src={globe} alt="world" className='globe'/>
                <p className="address1">In - Ca</p>
              </div>
            </div>
        </div>
        
    </>
  )
}

export default Home