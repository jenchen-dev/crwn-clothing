import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <div className="header-container">
                    <Link className="logo-container" to="/">
                        <CrwnLogo className="logo"/>
                    </Link>
                    <h1>CRWN-CLOTHING</h1>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/">
                        HOME
                    </Link>
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/auth">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
