import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import classes from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
      <div className={classNames(classes.PageError, {}, [className])}>
          <p className={classes.errorMessage}>
              { t('unexpectedError') }
          </p>
          <Button onClick={reloadPage}>
              { t('reloadPage') }
          </Button>
      </div>
  );
};
