import linkedInIcon from '../assets/img/nav-icon1.svg'
import facebookIcon from '../assets/img/nav-icon2.svg'
import instagramIcon from '../assets/img/nav-icon3.svg'

function SocialMediaIcons() {
    return (
        <div className="social-icon">
            <a href="https://github.com/IgorIvanter">
                <img src={linkedInIcon} alt=""></img>
            </a>
            <a href="https://github.com/IgorIvanter">
                <img src={facebookIcon} alt=""></img>
            </a>
            <a href="https://github.com/IgorIvanter">
                <img src={instagramIcon} alt=""></img>
            </a>
        </div>
    )
}

export default SocialMediaIcons