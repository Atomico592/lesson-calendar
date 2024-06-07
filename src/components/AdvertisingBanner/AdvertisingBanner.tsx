import "./AdvertisingBanner.scss"
// import Button from "../UI/Button/Button.tsx";

const AdvertisingBanner = () => {
    return (
        <div className="advertising-banner">
            <h3 className="advertising-banner__title">Учитесь бесплатно</h3>
            <p className="advertising-banner__content">Приводите друзей с детьми заниматься в Sirius Future
                и получайте подарки!</p>
            <button className="advertising-banner__btn">Узнать</button>
        </div>
    );
};

export default AdvertisingBanner;