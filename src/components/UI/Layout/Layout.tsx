import React from "react";
import Header from "../../Header/Header.tsx";
import SideBar from "../../SideBar/SideBar.tsx";
import "./Layout.scss"

interface Props  {
    children: React.ReactNode
}

const Layout : React.FC<Props>  = ({children}) => {
    return (
        <div className="container">
            <div className="layout-container">
                <div className="components-wrapper">
                    <div className="side-bar-wrapper">
            <SideBar/>
                    </div>
            <Header/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;