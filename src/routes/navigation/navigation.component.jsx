import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className="navigation">
                <div className="header-container">
                    <Link className="logo-container" to="/">
                        <CrwnLogo />
                    </Link>
                    <h2>CRWN-CLOTHING</h2>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/">
                        HOME
                    </Link>
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutUser}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
