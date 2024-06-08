import { PlusIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import Card from "../Components/Card";
import {
  ITEM_DETAILS_MENU,
  ITEM_LIST_MENU,
  useMenuStore,
} from "../Store/useMenuStore";
import { useItemDetails } from "../Store/useItemDetails";
import { useItemListStore } from "../Store/useItemListStore";

export default function Items({ products }) {
  const { setMenu } = useMenuStore();
  const { setItemDetails } = useItemDetails();
  const { addItem } = useItemListStore();

  return (
    <>
      <div className="flex items-start justify-between mb-14">
        <h1 className="font-medium text-2xl w-1/2">
          <span className="font-bold text-primary">Shoppingify</span> allows you
          take your shopping list wherever you go
        </h1>
        <SearchInput />
      </div>

      <section>
        {Object.keys(products).map((category) => (
          <div className="mb-12" key={category}>
            <h2 className="font-medium text-lg mb-4">{category}</h2>
            <div className="grid grid-cols-4 gap-x-5 gap-y-11">
              {products[category].map((item) => (
                <Card
                  key={item.id}
                  onClick={() => {
                    setMenu(ITEM_DETAILS_MENU);
                    setItemDetails(item);
                  }}
                  className={"flex items-center justify-between"}
                >
                  <p>{item.name}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(item);
                      setMenu(ITEM_LIST_MENU);
                    }}
                    className="rounded-full p-1 hover:bg-gray-100"
                  >
                    <PlusIcon size={20} className="text-gray-500" />
                  </button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

function SearchInput() {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-white flex items-center px-4 py-3 rounded-xl shadow space-x-5 w-[275px] border-2 border-transparent focus-within:border-primary transition-colors duration-200">
      <SearchIcon size={20} />
      <input
        placeholder="search item"
        className="flex-1 focus:outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
