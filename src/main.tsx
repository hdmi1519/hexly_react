import { createRoot } from 'react-dom/client';
import App from '@app/app';

import '@styles/root.css';

async function prepareApp() {
  const { worker } = await import('@/mocks/browser');

  return worker.start({
    serviceWorker: {
      url: `${import.meta.env.BASE_URL}mockServiceWorker.js`,
    },
    onUnhandledRequest: 'bypass',
  });
}

prepareApp().then(() => {
  createRoot(document.getElementById('application')!).render(
    <App />
  );
});
