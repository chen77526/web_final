import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { Button } from '../globalStyles'
import { 
    AiOutlineBars,
    AiOutlineClose,
    AiOutlineHome,
    AiOutlineLogin
} from 'react-icons/ai';
import { 
    Nav,
    NavbarContainer,
    NavIcon,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    ToggleIcon
} from '../Components/NavBar_ele';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const clickHandler = () => {
        setClick(!click);
    }
    const buttonHandler = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    const textColor = '#1e8ef7';

    useEffect(() => {
        buttonHandler()
    }, [])

    window.addEventListener('resize', buttonHandler);

    return (
        <>
            <IconContext.Provider value={{color: textColor}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to='/' style={{color: textColor}}>
                            <NavIcon />
                            NTU JOBS
                        </NavLogo>
                        <ToggleIcon onClick={clickHandler}>
                            {click ? <AiOutlineClose /> : <AiOutlineBars />}
                        </ToggleIcon>
                        <NavMenu onClick={clickHandler} click={click}>
                            <NavItem>
                                <NavLinks to='/'><AiOutlineHome style={{marginRight: "0.5rem"}}/>HOME</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/login'><AiOutlineLogin style={{marginRight: "0.5rem"}}/>LOGIN</NavLinks>
                            </NavItem>
                            <NavBtn>
                                {button ? (
                                <NavBtnLink to='/signup'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                                ) : (
                                    <NavBtnLink to='/signup'>
                                        <Button fontBig primary>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar;
