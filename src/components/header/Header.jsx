import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiDark } from 'react-icons/ci';
import Logo from '../../assets/media/logotip.svg';
import '../../assets/style/Header.scss';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const [openBurger, setOpenBurger] = React.useState(false);

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  }


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <header className={`header ${isVisible ? 'visible' : 'hidden'}`} id="header">
        <div className="container">
          <div className="header-wrapper">
            <Link to="/">
              <div className="header-logo">
                <img className="images-logo" src={Logo} alt="" />
              </div>
            </Link>
            
            <div className="navbar">
              <div className='block-list'>
              <ul  onClick={handleScrollToTop} className="df">
                <Link className="active" to="/">
                  Главный
                </Link>
                <Link to="/comands">Команда</Link>
                <Link to="/Projects">Проекты</Link>
                <Link to="/contact">Контакт</Link>
              </ul>
              </div>

          <div className="burger">
             <AiOutlineMenu onClick={() => setOpenBurger(true)} />
        </div>

        {openBurger && (
              <div className="overlay-burger" onClick={()=>setOpenBurger(false) }>
                <div className="nav-link burger flex-column">
                  <Link className="white" to="/">Главный</Link>
                  <Link className="white" to="/comands">Команда</Link>
                  <Link className="white" to="/Projects">Проекты</Link>
                  <Link className="white" to="/contact">Контакт</Link>

                  {/* <div className="dark">
              <div className="color">
                <button className="dark__mood">
                  <CiDark className="ciDark" />
                </button>
              </div>
            </div> */}
               
               <div className="closeMenu burger">
                  <AiOutlineClose onClick={() => setOpenBurger(false)} />
                </div>

                </div>
                <div className="closeMenu burger">
                  <AiOutlineClose onClick={() => setOpenBurger(false)} />
                </div>
              </div>
            )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
