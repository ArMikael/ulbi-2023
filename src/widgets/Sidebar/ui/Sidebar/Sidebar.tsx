import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import classes from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const { t } = useTranslation();

  return (
      <div
          data-testid="sidebar"
          className={classNames(classes.Sidebar, { [classes.collapsed]: collapsed }, [className])}
      >
          <Button
              data-testid="sidebar-toggle"
              onClick={onToggle}
          >
              { t('collapse') }
          </Button>

          <div>
              <LangSwitcher className={classes.langSwitcher} />
              <ThemeSwitcher />
          </div>
      </div>
  );
};
