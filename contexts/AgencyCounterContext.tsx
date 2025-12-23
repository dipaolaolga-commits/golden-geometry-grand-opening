import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

interface AgencyCounterContextType {
  decrementCounter: () => void;
  decrementCount: number;
  currentSlots: number;
  setCurrentSlots: (slots: number | ((prev: number) => number)) => void;
  // LeadMagnet Counter
  leadMagnetCount: number;
  incrementLeadMagnetCount: () => void;
}

const AgencyCounterContext = createContext<AgencyCounterContextType | undefined>(undefined);

const STORAGE_KEY = 'agencyCounterSlots';
const STORAGE_DATE_KEY = 'agencyCounterDate';

const LEADMAGNET_STORAGE_KEY = 'leadMagnetCount';
const LEADMAGNET_STORAGE_DATE_KEY = 'leadMagnetDate';

export const AgencyCounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [decrementCount, setDecrementCount] = useState(0);
  const [currentSlots, setCurrentSlotsState] = useState(() => {
    // Lade gespeicherten Wert beim Initialisieren
    if (typeof window === 'undefined') return 7;
    
    try {
      const storedDate = localStorage.getItem(STORAGE_DATE_KEY);
      const storedSlots = localStorage.getItem(STORAGE_KEY);
      const today = new Date().toDateString();
      
      // Wenn ein neuer Tag ist, starte bei 7
      if (!storedDate || storedDate !== today) {
        return 7;
      }
      
      // Verwende gespeicherten Wert
      if (storedSlots) {
        const slots = parseInt(storedSlots, 10);
        if (!isNaN(slots) && slots >= 2 && slots <= 7) {
          return slots;
        }
      }
    } catch {
      // Bei Fehler, starte bei 7
    }
    
    return 7;
  });

  // LeadMagnet Counter: Basis-Count (117 + täglich 17) + Session-Inkremente
  const [leadMagnetCount, setLeadMagnetCountState] = useState(() => {
    if (typeof window === 'undefined') return 0;
    
    const START_COUNT = 117;
    const START_DATE = new Date('2025-12-18T00:00:00Z');
    const DAILY_INCREASE = 17;
    
    const today = new Date();
    const daysSinceStart = Math.max(
      0,
      Math.floor((today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24))
    );
    const baseCount = START_COUNT + daysSinceStart * DAILY_INCREASE;
    
    // Session-spezifische Inkremente (wird pro Session zurückgesetzt)
    try {
      const storedDate = localStorage.getItem(LEADMAGNET_STORAGE_DATE_KEY);
      const storedSessionCount = localStorage.getItem(LEADMAGNET_STORAGE_KEY);
      const todayStr = new Date().toDateString();
      
      if (!storedDate || storedDate !== todayStr) {
        return baseCount;
      }
      
      if (storedSessionCount) {
        const sessionCount = parseInt(storedSessionCount, 10);
        if (!isNaN(sessionCount)) {
          return baseCount + sessionCount;
        }
      }
    } catch {
      // Bei Fehler, nur Basis-Count
    }
    
    return baseCount;
  });

  // Speichere den Wert, wenn er sich ändert
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const today = new Date().toDateString();
      localStorage.setItem(STORAGE_KEY, currentSlots.toString());
      localStorage.setItem(STORAGE_DATE_KEY, today);
    } catch {
      // Ignoriere Fehler beim Speichern
    }
  }, [currentSlots]);

  // Speichere LeadMagnet Count (nur Session-Inkremente)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const START_COUNT = 117;
      const START_DATE = new Date('2025-12-18T00:00:00Z');
      const DAILY_INCREASE = 17;
      
      const today = new Date();
      const daysSinceStart = Math.max(
        0,
        Math.floor((today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24))
      );
      const baseCount = START_COUNT + daysSinceStart * DAILY_INCREASE;
      const sessionIncrement = leadMagnetCount - baseCount;
      
      const todayStr = new Date().toDateString();
      localStorage.setItem(LEADMAGNET_STORAGE_KEY, sessionIncrement.toString());
      localStorage.setItem(LEADMAGNET_STORAGE_DATE_KEY, todayStr);
    } catch {
      // Ignoriere Fehler beim Speichern
    }
  }, [leadMagnetCount]);

  const setCurrentSlots = useCallback((slots: number | ((prev: number) => number)) => {
    setCurrentSlotsState((prev) => {
      const newValue = typeof slots === 'function' ? slots(prev) : slots;
      return Math.max(2, Math.min(7, newValue)); // Sicherstellen, dass zwischen 2 und 7
    });
  }, []);

  const decrementCounter = useCallback(() => {
    setDecrementCount(prev => prev + 1);
    setCurrentSlotsState(prev => Math.max(2, prev - 1));
  }, []);

  const incrementLeadMagnetCount = useCallback(() => {
    setLeadMagnetCountState(prev => prev + 1);
  }, []);

  return (
    <AgencyCounterContext.Provider value={{ 
      decrementCounter, 
      decrementCount, 
      currentSlots, 
      setCurrentSlots,
      leadMagnetCount,
      incrementLeadMagnetCount
    }}>
      {children}
    </AgencyCounterContext.Provider>
  );
};

export const useAgencyCounter = () => {
  const context = useContext(AgencyCounterContext);
  if (!context) {
    throw new Error('useAgencyCounter must be used within AgencyCounterProvider');
  }
  return context;
};

