import notificationIcon from "../../assets/icons/notification.png"
import "./Header.scss"

const Header = () => {
    return (
        <header className="header-component">
                <button className="header-component__notification-btn"><img src={notificationIcon} alt="message"/></button>
                <button></button>
        </header>
    );
};

export default Header;