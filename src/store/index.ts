import { create } from "zustand";

interface storeState {
  bears: number;
  increase: (by: number) => void;
}

export const useStore = create<storeState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}));
