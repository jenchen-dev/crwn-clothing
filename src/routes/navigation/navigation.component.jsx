import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    <Link className="nav-link" to="/sign-in">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
            <footer>Jen Chen @ 2022</footer>
        </Fragment>
    );
};

export default Navigation;
