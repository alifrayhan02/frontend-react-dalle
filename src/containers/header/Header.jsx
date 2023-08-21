import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai2.png'

const Header = () => {


  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Create realistic images and art from a description in natural language
        </h1>
        <p>DALL-E is a neural network-based model developed by OpenAI. It's a variant of the GPT (Generative Pre-trained Transformer) architecture, specifically designed for generating images from textual descriptions.</p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder=" Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header