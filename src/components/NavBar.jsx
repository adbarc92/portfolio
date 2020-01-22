import React, {Component} from 'react';

export default class NavBar extends Component{
    render(){
        return (
          <div>
            <ul className='nav-list'>
              <li>Projects</li>
              <li>Blog</li>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </div>
        );
    }
};