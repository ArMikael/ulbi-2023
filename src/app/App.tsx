import React, { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button/Button';
import { t } from 'i18next';

function App() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
              <Navbar />
              <Button onClick={() => setIsOpen(true)}>{ t('toggle')}</Button>
              <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                  { t('modalContent')}
              </Modal>

              <div className="main-content">
                  <Sidebar />
                  <AppRouter />
              </div>
          </Suspense>
      </div>
  );
}

export default App;
