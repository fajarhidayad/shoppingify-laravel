import React from "react";
import {
  ITEM_DETAILS_MENU,
  ITEM_LIST_MENU,
  NEW_ITEM_FORM_MENU,
  useMenuStore,
} from "../Store/useMenuStore";
import ItemDetails from "./ItemDetails";
import NewItemForm from "./NewItemForm";
import ItemListMenu from "./ItemListMenu";

export default function Menu() {
  const { menu, setMenu } = useMenuStore();

  if (menu === NEW_ITEM_FORM_MENU)
    return <NewItemForm onCloseForm={() => setMenu(ITEM_LIST_MENU)} />;

  if (menu === ITEM_DETAILS_MENU) return <ItemDetails />;

  return <ItemListMenu setMenu={setMenu} />;
}
