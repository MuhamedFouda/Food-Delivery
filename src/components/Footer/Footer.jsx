import { assets } from '../../assets/assets'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={assets.logo}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident recusandae in nisi odit ad, illo labore commodi voluptatem. Blanditiis optio laboriosam officiis nulla natus dolores eligendi totam ullam voluptatum omnis.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
            </div>
        </div>
        <div className="footer-content-center">
            <h2> COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivary</li>
                <li>Privacy plicy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2> GET IN TOUCH</h2>
            <ul>
                <li>+201552065122</li>
                <li>muhamedahmedfouda@gmail.com</li>
            </ul>
        </div>
        </div>
        <hr/>
        <p className='footer-copyright'> copyright 2024@Fouda - All Right Reserved</p>
    </div>
  )
}
