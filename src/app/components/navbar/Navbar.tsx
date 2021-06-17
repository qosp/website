import React, {useState, createContext, useContext, MouseEventHandler} from 'react';
import {BiLinkExternal, MdMenu} from "react-icons/all";
import './Navbar.scss';
import RoundLogo from '../../assets/logo_round.png';
import {GIT_REPO_URL} from "../../utils/Constants";
import {Link} from 'react-router-dom';

interface NavMenuContextProps {
    children: any
    value: any
}

const NavMenuContext = createContext((visibility: boolean) => {});

export const MenuToggleProvider = ({ children, value }: NavMenuContextProps) => {
    return <NavMenuContext.Provider value={value}>{children}</NavMenuContext.Provider>;
}

// TODO: Make navbar mobile friendly
export const Navbar = () => {
    const [menuShowing, setMenuShowing] = useState(false);
    const toggleDrawerMenu = () => {setMenuShowing(!menuShowing)}

    return (
        <>
            <MenuToggleProvider value={setMenuShowing}>
                <div className={menuShowing ? "navbar" : "navbar--elevated"}>
                    <NavHome/>
                    <NavLink text="Download" path={"/download"} hideOnSmallScreen={true}/>
                    <NavDivider/>
                    {/*<NavLink text="Support" path={"/support"} hideOnSmallScreen={true}/>*/}
                    <NavLink text="View at GitHub" path={GIT_REPO_URL} isExternal={true} hideOnSmallScreen={true}/>

                    <MdMenu className={"nav--menu-button"} onClick={toggleDrawerMenu}/>
                </div>


                <div className={menuShowing ? "nav-drawer active" : "nav-drawer"}>
                    <NavLink text="Download" path={"/download"}/>
                    <NavDivider/>
                    {/*<NavLink text="Support" path={"/support"}/>*/}
                    <NavLink text="View at GitHub" path={GIT_REPO_URL} isExternal={true}/>
                </div>
            </MenuToggleProvider>
        </>
    );
}

const NavHome = () => {
    const setMenuShowing = useContext(NavMenuContext)
    const hideDrawer = () => { setMenuShowing(false) }

    return (
        <div onClick={hideDrawer}>
            <Link className="nav" to="/">
                <img src={RoundLogo} alt={"Quillnote"} className={"logo"}/>
                <span className="home">Quillnote</span>
            </Link>
        </div>
    );
}

const NavLink = (props: NavLinkProps) => {
    const setMenuShowing = useContext(NavMenuContext)
    const hideDrawer = () => { setMenuShowing(false) }

    return (
        <div className={props.hideOnSmallScreen ? "nav--hide-on-small-screen" : "nav"} onClick={hideDrawer}>
            {props.isExternal ?
                <a className="link" target="_blank" rel="noreferrer" href={props.path}>
                    {props.text}
                    <BiLinkExternal style={{marginLeft: '3px'}}/>
                </a>
                :
                <Link className="link" to={props.path}>
                    {props.text}
                </Link>
            }
        </div>
    );
}

const NavDivider = () => {
    return <span className="nav-divider"/>
}

interface NavLinkProps {
    text: string
    path: string
    isExternal?: boolean
    hideOnSmallScreen?: boolean
}
