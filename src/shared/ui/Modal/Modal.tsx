import React, { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import classes from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const closeHandler = () => {
    if (onClose) {
      onClose();
    }
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const mods: Record<string, boolean> = {
    [classes.opened]: isOpen,
  };

  return (
      <div className={classNames(classes.Modal, mods, [className])}>
          <div className={classes.overlay} onClick={closeHandler}>
              <div
                  className={classes.content}
                  onClick={onContentClick}
              >
                  {children}
              </div>
          </div>
      </div>
  );
};
