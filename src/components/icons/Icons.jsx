import React from 'react';
import {Icon} from '@iconify/react';
import './Icons.css';

const Icons = () => {
    return (
        <div className="container mt-4">
            <div className="icons">
            <div className="follow">
                <h3 className="text-capitalize"> <Icon icon="foundation:social-delicious" className="awesome" /> follow us</h3>
            <div className="media-icons">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            </div>

            <div className="email">
            <h3 className="text-capitalize"> <Icon icon="fontisto:email" className="awesome" /> email</h3>
            <p>itiaaconsults@gmail.com </p>
            </div>

            <div className="call">
                <h3 className="text-capitalize"> <Icon icon="codicon:call-incoming" className="awesome" /> call</h3>
                <p>+26775295819</p>
            </div>
            </div>
        </div>
    )
}

export default Icons
