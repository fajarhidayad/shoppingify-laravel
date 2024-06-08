import { create } from "zustand";

export const useItemDetails = create((set) => ({
  item: {},
  setItemDetails: (item) => set(() => ({ item })),
}));
