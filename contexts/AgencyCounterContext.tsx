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
const LEADMAGNET_START_DATE_KEY = 'leadMagnetStartDate';

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

  // LeadMagnet Counter: Start bei 10, steigt täglich bis Grand Opening (17. Jan 2026) auf 150
  const [leadMagnetCount, setLeadMagnetCountState] = useState(() => {
    if (typeof window === 'undefined') return 0;
    
    const START_COUNT = 10;
    const GRAND_OPENING_DATE = new Date('2026-01-17T00:00:00Z');
    GRAND_OPENING_DATE.setHours(0, 0, 0, 0);
    const END_COUNT = 150;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Lade oder setze Startdatum (einmalig beim ersten Besuch)
    let startDate: Date;
    try {
      const storedStartDateStr = localStorage.getItem(LEADMAGNET_START_DATE_KEY);
      if (storedStartDateStr) {
        startDate = new Date(storedStartDateStr);
        startDate.setHours(0, 0, 0, 0);
      } else {
        // Erstes Mal: Setze heute als Startdatum
        startDate = new Date(today);
        localStorage.setItem(LEADMAGNET_START_DATE_KEY, startDate.toISOString());
      }
    } catch {
      // Bei Fehler, verwende heute als Startdatum
      startDate = new Date(today);
    }
    
    // Berechne Anzahl der Tage bis zum Grand Opening
    const totalDays = Math.max(
      1,
      Math.ceil((GRAND_OPENING_DATE.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    );
    
    // Berechne tägliche Steigerung, damit wir am Grand Opening bei 150 sind
    const totalIncrease = END_COUNT - START_COUNT;
    const dailyIncrease = totalIncrease / totalDays;
    
    // Berechne Anzahl der Tage seit Start
    const daysSinceStart = Math.max(
      0,
      Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
    );
    
    // Berechne Basis-Count für heute (maximal END_COUNT)
    const baseCount = Math.min(
      END_COUNT,
      Math.round(START_COUNT + daysSinceStart * dailyIncrease)
    );
    
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
          return Math.min(END_COUNT, baseCount + sessionCount);
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
      const START_COUNT = 10;
      const GRAND_OPENING_DATE = new Date('2026-01-17T00:00:00Z');
      GRAND_OPENING_DATE.setHours(0, 0, 0, 0);
      const END_COUNT = 150;
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Lade Startdatum aus localStorage
      let startDate: Date;
      const storedStartDateStr = localStorage.getItem(LEADMAGNET_START_DATE_KEY);
      if (storedStartDateStr) {
        startDate = new Date(storedStartDateStr);
        startDate.setHours(0, 0, 0, 0);
      } else {
        startDate = new Date(today);
        localStorage.setItem(LEADMAGNET_START_DATE_KEY, startDate.toISOString());
      }
      
      const totalDays = Math.max(
        1,
        Math.ceil((GRAND_OPENING_DATE.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
      );
      const totalIncrease = END_COUNT - START_COUNT;
      const dailyIncrease = totalIncrease / totalDays;
      
      const daysSinceStart = Math.max(
        0,
        Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
      );
      const baseCount = Math.min(
        END_COUNT,
        Math.round(START_COUNT + daysSinceStart * dailyIncrease)
      );
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

