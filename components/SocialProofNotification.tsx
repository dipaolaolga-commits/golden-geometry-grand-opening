import React, { useState, useEffect } from 'react';
import { useAgencyCounter } from '../contexts/AgencyCounterContext';

interface SocialProofNotificationProps {
  onIncrementCounter?: () => void;
}

/**
 * E-Commerce-Style Social Proof Benachrichtigungen
 * Zeigt zufällige Namen, die sich "gerade den Vorteil gesichert haben"
 * Erscheint als Bubble über dem Sticky-Button
 */
const NAMES = [
  'Max P.',
  'Sarah M.',
  'Tom K.',
  'Lisa R.',
  'Jan F.',
  'Anna L.',
  'Paul S.',
  'Emma W.',
  'Felix B.',
  'Marie H.',
  'Lukas D.',
  'Sophie T.',
  'Ben N.',
  'Julia G.',
  'Noah Z.',
  'Lena J.',
  'Finn C.',
  'Mia V.',
  'Jonas A.',
  'Hannah Y.'
];

interface Notification {
  id: number;
  name: string;
  timestamp: number;
}

export const SocialProofNotification: React.FC<SocialProofNotificationProps> = ({ 
  onIncrementCounter 
}) => {
  const { incrementLeadMagnetCount } = useAgencyCounter();

  const handleIncrement = () => {
    incrementLeadMagnetCount(); // Erhöhe LeadMagnet Counter über Context
    if (onIncrementCounter) {
      onIncrementCounter();
    }
  };
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Warte 20 Sekunden bevor die erste Benachrichtigung erscheint (synchron mit Counter)
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
      showFirstNotification();
    }, 20000); // 20 Sekunden

    return () => clearTimeout(initialDelay);
  }, []);

  const showFirstNotification = () => {
    const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
    const newNotification: Notification = {
      id: Date.now(),
      name: randomName,
      timestamp: Date.now()
    };
    
    setNotifications([newNotification]);
    handleIncrement(); // Erhöhe LeadMagnet Counter
    
    // Zeige weitere Benachrichtigungen in Intervallen
    startNotificationInterval();
  };

  const startNotificationInterval = () => {
    // Timing-Sequenz: Erste nach 20s, zweite nach 40s (20s später), dritte nach 60s (20s später)
    // Innerhalb einer Minute 2-3 Benachrichtigungen
    let notificationCount = 0;
    const delays = [20000, 20000]; // Zweite nach 20s, dritte nach weiteren 20s (40s und 60s total)
    
    const scheduleNext = () => {
      let delay: number;
      
      if (notificationCount < delays.length) {
        // Verwende die spezifischen Delays für die ersten Notifications (innerhalb einer Minute)
        delay = delays[notificationCount];
      } else {
        // Danach alle 60 Sekunden (nach der ersten Minute)
        delay = 60000;
      }
      
      notificationCount++;
      
      const timeout = setTimeout(() => {
        const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
        const newNotification: Notification = {
          id: Date.now(),
          name: randomName,
          timestamp: Date.now()
        };
        
        setNotifications(prev => {
          // Entferne alte Benachrichtigungen (älter als 8 Sekunden)
          const filtered = prev.filter(n => Date.now() - n.timestamp < 8000);
          return [...filtered, newNotification].slice(-2); // Maximal 2 gleichzeitig
        });
        
        handleIncrement(); // Erhöhe LeadMagnet Counter
        
        // Plane die nächste Notification
        scheduleNext();
      }, delay);
      
      return () => clearTimeout(timeout);
    };
    
    // Starte die Sequenz
    const cleanup = scheduleNext();
    return cleanup;
  };

  // Entferne Benachrichtigungen nach 8 Sekunden (mit fade-out Animation)
  useEffect(() => {
    if (notifications.length === 0) return;

    const interval = setInterval(() => {
      setNotifications(prev => 
        prev.filter(n => Date.now() - n.timestamp < 8000)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [notifications]);

  if (!isVisible || notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-20 md:bottom-8 left-4 right-4 md:left-auto md:right-8 z-[45] pointer-events-none">
      <div className="flex flex-col gap-2 items-end px-4 md:items-end">
        {notifications.map((notification) => {
          const age = Date.now() - notification.timestamp;
          const isFadingOut = age > 6000; // Beginne fade-out nach 6 Sekunden
          const opacity = isFadingOut ? Math.max(0, 1 - (age - 6000) / 2000) : 1;
          
          return (
            <div
              key={notification.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-2.5 flex items-center gap-2 min-w-[240px] max-w-[calc(100vw-2rem)] md:max-w-[320px] transition-opacity duration-1000 ease-in-out"
              style={{
                animation: 'slideInBottom 0.8s ease-out',
                opacity: opacity,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
              <span className="text-xs text-gray-700">
                <span className="font-semibold text-[#C5A059]">{notification.name}</span>
                {' '}hat sich gerade den 50€ Gutschein gesichert und ist dabei
              </span>
            </div>
          );
        })}
      </div>
      
      <style>{`
        @keyframes slideInBottom {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

