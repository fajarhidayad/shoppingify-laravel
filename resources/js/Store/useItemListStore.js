import { create } from "zustand";

export const useItemListStore = create((set) => ({
  itemList: [],
  addItem: (newItem) =>
    set((state) => {
      if (state.itemList.find((item) => item.id === newItem.id)) {
        return {
          itemList: state.itemList.map((item) => {
            if (item.id === newItem.id)
              return { ...item, quantity: item.quantity + 1 };
            return item;
          }),
        };
      } else {
        return {
          itemList: [...state.itemList, { ...newItem, quantity: 1 }],
        };
      }
    }),
  addQuantity: (itemId) =>
    set((state) => ({
      itemList: state.itemList.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  reduceQuantity: (itemId) =>
    set((state) => ({
      itemList: state.itemList.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      ),
    })),
  removeItem: (itemId) =>
    set((state) => ({
      itemList: state.itemList.filter((item) => item.id !== itemId),
    })),
  deleteAllItems: () => set(() => ({ itemList: [] })),
}));
