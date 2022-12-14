import linkedInIcon from '../assets/img/nav-icon1.svg'
import facebookIcon from '../assets/img/github.svg'
import instagramIcon from '../assets/img/telegram.svg'


const LINKEDIN_LINK = "https://www.linkedin.com/in/igor-ivanter-abab26256/"
const GITHUB_LINK = "https://github.com/IgorIvanter"
const TELEGRAM_LINK = "https://web.telegram.org/k/#@igor_ivanter"


function SocialMediaIcons() {
    return (
        <div className="social-icon">
            <a target="_blank" rel="noreferrer" href={LINKEDIN_LINK}>
                <img src={linkedInIcon} alt=""></img>
            </a>
            <a target="_blank" rel="noreferrer" href={GITHUB_LINK}>
                <img src={facebookIcon} alt=""></img>
            </a>
            <a target="_blank" rel="noreferrer" href={TELEGRAM_LINK}>
                <img src={instagramIcon} alt=""></img>
            </a>
        </div>
    )
}

export default SocialMediaIcons