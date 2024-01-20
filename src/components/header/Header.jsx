import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiDark } from 'react-icons/ci';
import Logo from '../../assets/media/logotip.svg';
import '../../assets/style/Header.scss';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
              <ul  onClick={handleScrollToTop} className="df">
                <Link className="active" to="/">
                  Главный
                </Link>
                <Link to="/comands">Команда</Link>
                <Link to="/Projects">Проекты</Link>
                <Link to="/contact">Контакт</Link>
              </ul>
            </div>

            <div className="dark">
              <div className="color">
                <button className="dark__mood">
                  <CiDark className="ciDark" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
