import useProfileModal from '@/app/hooks/useProfileModal';
import { useEffect, useRef } from 'react';

interface ITelegramUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  photo_url: string;
  auth_date: number;
  hash: string;
}

declare global {
  interface Window {
    onTelegramAuth: (user: ITelegramUser) => void
  }
}

const Header: React.FC = () => {
  const telegramRef = useRef<HTMLDivElement>(null);

  const profileModal = useProfileModal();

  useEffect(() => {
    if (telegramRef.current) {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-widget.js?7';
      script.setAttribute('data-telegram-login', 'meety_scheduler_bot');
      script.setAttribute('data-size', 'large');
      script.setAttribute("data-onauth", "onTelegramAuth(user)");
      script.setAttribute('data-auth-url', 'https://meety-api-stage-286591802638.us-central1.run.app/api/v1/messengers/telegram/auth');
      script.setAttribute('data-request-access', 'write');
      // script.setAttribute("data-auth-url", "/login-widget")
      script.async = true;
      telegramRef.current.appendChild(script);
    }
  }, []);

  window.onTelegramAuth = function (user) {
    profileModal.onOpen(user);
  }

  return (
    <header className="w-full flex justify-start items-center gap-4 p-4">

      <div ref={telegramRef}></div>
    </header>
  );
};

export default Header;