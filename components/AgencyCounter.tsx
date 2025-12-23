import React, { useEffect } from 'react';
import { useAgencyCounter } from '../contexts/AgencyCounterContext';

interface AgencyCounterProps {
  variant?: 'dark' | 'light';
}

/**
 * Agency-Style Counter:
 * Verwendet den persistenten State aus dem Context.
 * Wird synchronisiert durch Social Proof Notifications über Context.
 * Behält seinen Zustand beim Navigieren zwischen Seiten.
 */
export const AgencyCounter: React.FC<AgencyCounterProps> = ({ 
  variant = 'light'
}) => {
  const { currentSlots, setCurrentSlots, decrementCount } = useAgencyCounter();
  
  // Sicherstellen, dass currentSlots immer eine gültige Zahl ist
  const displaySlots = typeof currentSlots === 'number' && !isNaN(currentSlots) ? currentSlots : 7;

  // Reagiere auf externe Dekrementierung (z.B. durch Social Proof)
  // Das wird bereits im Context gehandhabt, aber wir stellen sicher, dass der State synchron ist
  useEffect(() => {
    // Der Context kümmert sich bereits um die Dekrementierung
  }, [decrementCount]);

  useEffect(() => {
    const slots = typeof currentSlots === 'number' && !isNaN(currentSlots) ? currentSlots : 7;
    if (slots <= 2) return;

    // Alle 45 Sekunden reduziert sich der Counter um 1, bis er 2 erreicht
    const interval = setInterval(() => {
      setCurrentSlots((prev) => {
        const prevValue = typeof prev === 'number' && !isNaN(prev) ? prev : 7;
        return Math.max(2, prevValue - 1);
      });
    }, 45000);

    return () => clearInterval(interval);
  }, [currentSlots, setCurrentSlots]);

  const baseClasses =
    'mt-[10px] text-[10px] md:text-[11px] font-medium uppercase tracking-[0.32em] text-center';
  const colorClasses =
    variant === 'dark'
      ? 'text-white'
      : 'text-gray-800';

  return (
    <p className={`${baseClasses} ${colorClasses}`}>
      Nur noch <span className="font-semibold">{displaySlots}</span> Plätze verfügbar
    </p>
  );
};


