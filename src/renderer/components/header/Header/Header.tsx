import { memo, ReactElement } from 'react';
import logoutIcon from '../../../../../assets/icons/logout-icon.png';
import headerIcon from '../../../../../assets/icons/header-icon.png';
import settingsIcon from '../../../../../assets/icons/settings-icon.png';
import timingIcon from '../../../../../assets/icons/timing-icon.png';

import './Header.css';

type HeaderPropsType = {
  onLogoutClick: () => void;
  onSettingsClick: () => void;
  onTimingClick: () => void;
  onLogoClick: () => void;
  isAuth: boolean;
  isAdmin: boolean;
};

const Header = memo(
  ({
    onLogoutClick,
    isAuth,
    isAdmin,
    onSettingsClick,
    onTimingClick,
    onLogoClick,
  }: HeaderPropsType): ReactElement => {
    return (
      <header className="header">
        <div className="header__wrapper">
          <div className="title-and-logo" id="title-and-logo">
            <h2
              onClick={onLogoClick}
              className="dashboard-name"
              aria-hidden="true"
            >
              Meeting Room Booking
            </h2>
            <div className="header__logoIcon">
              <img src={headerIcon} alt="logo icon" />
            </div>
          </div>
          {isAuth && (
            <div>
              <button
                type="button"
                className="settings-icon"
                onClick={onTimingClick}
              >
                <img src={timingIcon} alt="timing icon" />
              </button>
              {isAdmin && (
                <button
                  type="button"
                  className="settings-icon"
                  onClick={onSettingsClick}
                >
                  <img src={settingsIcon} alt="settings icon" />
                </button>
              )}
              <button
                type="button"
                className="logoutIcon"
                onClick={onLogoutClick}
              >
                <img src={logoutIcon} alt="logout icon" />
              </button>
            </div>
          )}
        </div>
      </header>
    );
  }
);

export default Header;

Header.displayName = 'Header';
