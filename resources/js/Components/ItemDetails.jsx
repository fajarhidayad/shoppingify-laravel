import { Loader } from "lucide-react";
import React from "react";
import { useItemDetails } from "../Store/useItemDetails";
import { ITEM_LIST_MENU, useMenuStore } from "../Store/useMenuStore";
import { router } from "@inertiajs/react";

export default function ItemDetails() {
  const { setMenu } = useMenuStore();
  const { item, setItemDetails } = useItemDetails();

  const onDelete = () => {
    if (item) {
      router.delete(`/items/${item.id}`);
      setItemDetails({});
      setMenu(ITEM_LIST_MENU);
    }
    return;
  };

  return (
    <aside className="bg-white w-[389px] px-11 py-7">
      {item ? (
        <div className="flex flex-col h-full">
          <div className="mb-8">
            <button
              className="text-primary hover:underline"
              onClick={() => {
                setMenu(ITEM_LIST_MENU);
                setItemDetails({});
              }}
            >
              &larr; back
            </button>
          </div>

          {item.image ? (
            <div className="h-52 rounded-3xl bg-gray-200 mb-12"></div>
          ) : (
            <div className="mb-12 flex justify-center items-center bg-gray-100 rounded-xl py-7">
              <p className="text-gray-500">No image</p>
            </div>
          )}

          <div className="font-medium space-y-2 mb-8">
            <span className="text-xs text-gray-400">name</span>
            <p className="text-2xl">{item.name}</p>
          </div>
          <div className="font-medium space-y-2 mb-8">
            <span className="text-xs text-gray-400">category</span>
            <p className="text-lg">{item.category_name}</p>
          </div>
          <div className="font-medium space-y-2 mb-8">
            <span className="text-xs text-gray-400">note</span>
            <p className="text-lg">{item.note ? item.note : "No note"}</p>
          </div>

          <div className="flex justify-center space-x-4 mt-auto">
            <button
              className="px-6 rounded-xl hover:bg-gray-100 font-bold"
              onClick={onDelete}
            >
              delete
            </button>
            <button className="text-white bg-primary px-6 py-5 rounded-xl font-bold">
              Add to list
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center">
          <Loader className="animate-spin" />
        </div>
      )}
    </aside>
  );
}
