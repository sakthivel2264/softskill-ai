// store/useStringStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define the store with a string state and an action to update it
interface StringStore {
  value: string | null;
  setValue: (newValue: string | null) => void;
}

// Create the Zustand store with persistence
export const useStringStore = create<StringStore>()(
  persist(
    (set) => ({
      value: '', // Initial state
      setValue: (newValue: string | null) => set({ value: newValue }),
    }),
    {
      name: 'string-storage',
    }
  )
);
