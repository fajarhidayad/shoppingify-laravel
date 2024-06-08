import { create } from "zustand";

export const NEW_ITEM_FORM_MENU = "NEW_ITEM_FORM_MENU";
export const ITEM_LIST_MENU = "ITEM_LIST_MENU";
export const ITEM_DETAILS_MENU = "ITEM_DETAILS_MENU";

export const useMenuStore = create((set) => ({
  menu: ITEM_LIST_MENU,
  setMenu: (menu) => set(() => ({ menu })),
}));
