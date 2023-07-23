import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import classes from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
      <div className={classNames(classes.navbar, {}, [className])}>
          <div className={classes.navLinkPanel}>
              <AppLink theme={AppLinkTheme.PRIMARY} className={classes.navLink} to="/">
                  { t('home') }
              </AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} className={classes.navLink} to="/about">
                  { t('about') }
              </AppLink>

              <Button
                  className={classes.navLink}
                  theme={ButtonTheme.CLEAR_INVERTED}
                  onClick={onToggleModal}
              >
                  {t('login')}
              </Button>

              <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quam.
              </Modal>
          </div>
      </div>
  );
};

export default Navbar;
