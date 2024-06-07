import "./SideBar.scss"
import SideBarLogo from "../UI/SideBarLogo/SideBarLogo.tsx";
import AdvertisingBanner from "../AdvertisingBanner/AdvertisingBanner.tsx";
import ListItems from "../UI/ListItems/ListItems.tsx";

const SideBar = () => {
    return (
        <div className="side-bar">
            <div className="side-bar__logo-wrapper">
            <SideBarLogo/>
            </div>
            <ListItems></ListItems>
            <div className="side-bar__advertising-banner-wrapper">
            <AdvertisingBanner/>
            </div>
        </div>
    );
};

export default SideBar;