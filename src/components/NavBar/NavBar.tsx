import { FC } from 'react';
import AtbLogo from '@/icons/atb-logo.svg?react';
import { IProps } from './NavBar.types';
import { PagePaths } from '@/constants';
import { LogoLinkTitle, Nav } from './NavBar.styled';
import { Link } from 'react-router-dom';
import LocationFilter from '@/components/LocationFilter';
import NavControls from '@/components/NavControls';

const NavBar: FC<IProps> = ({
  isRootPage,
  isDesktop,
  setRegisterCodeModalWinState,
}) => {
  const showShortLogoLinkTitle = !isRootPage && !isDesktop;
  const showFakeNavControls = isRootPage && isDesktop;
  const logoLinkTitle = showShortLogoLinkTitle
    ? 'Акції'
    : 'Акції з подарунками';

  return (
    <Nav isRootPage={isRootPage} isDesktop={isDesktop}>
      {showFakeNavControls && (
        <NavControls
          isRootPage={isRootPage}
          setRegisterCodeModalWinState={setRegisterCodeModalWinState}
          isFake
        />
      )}
      <NavControls
        isRootPage={isRootPage}
        setRegisterCodeModalWinState={setRegisterCodeModalWinState}
      />
      <Link to={PagePaths.root}>
        <AtbLogo />
        <LogoLinkTitle>{logoLinkTitle}</LogoLinkTitle>
      </Link>
      {!isRootPage && <LocationFilter isRootPage={isRootPage} />}
    </Nav>
  );
};

export default NavBar;
