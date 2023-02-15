import { useState, ReactElement } from 'react';

import Header from './Header';

function HeaderContainer(): ReactElement {
  const [isAuth, setIsAuth] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);

  const handleLogOutClick = () => {
    setIsAuth(!isAuth);
  };
  const onSettingsClick = () => {};
  const onTimingClick = () => {};
  const onLogoClick = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <Header
      onLogoutClick={handleLogOutClick}
      isAuth={isAuth}
      isAdmin={isAdmin}
      onSettingsClick={onSettingsClick}
      onTimingClick={onTimingClick}
      onLogoClick={onLogoClick}
    />
  );
}

export default HeaderContainer;
