import { useForm, usePage } from "@inertiajs/react";
import { PencilIcon } from "lucide-react";
import { useItemListStore } from "../Store/useItemListStore";
import { NEW_ITEM_FORM_MENU } from "../Store/useMenuStore";

export default function ItemListMenu({ setMenu }) {
  const { data, errors, setData, post } = useForm({ itemListName: "" });
  const { props } = usePage();
  const { itemList } = useItemListStore();

  function onSaveList(e) {
    e.preventDefault();
    if (!data.itemListName) return;
    post("/item-list", { data });
  }

  return (
    <aside className="bg-[#FFF0DE] flex flex-col w-[389px]">
      <section className="py-11 px-12 flex-1 flex flex-col">
        <div className="rounded-3xl bg-[#80485B] py-4 flex mb-11">
          <div className="relative w-[130px]">
            <img
              src={props.bottleImg}
              alt="bottle-logo"
              className="absolute -top-9 left-0 h-[150px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 flex-1">
              Didn’t find what you need?
            </h3>
            <button
              onClick={() => setMenu(NEW_ITEM_FORM_MENU)}
              className="rounded-xl text-sm font-bold px-7 py-3 bg-white"
            >
              Add item
            </button>
          </div>
        </div>

        {itemList.length > 0 && (
          <>
            {props.activeItemList && (
              <div className="flex items-center justify-between mb-10">
                <h2 className="font-bold text-2xl text-zinc-700">
                  {props.activeItemList.name}
                </h2>
                <button>
                  <PencilIcon size={24} />
                </button>
              </div>
            )}
            <div className="flex-1">
              {/* <h4 className="text-sm font-medium text-gray-600 mb-5">
                Fruit and vegetables
              </h4> */}
              <ul className="space-y-6">
                {itemList.map((item) => (
                  <ListItem key={item.id} item={item} />
                ))}
              </ul>
            </div>
          </>
        )}

        {itemList.length === 0 && (
          <div className="flex-1 flex flex-col justify-center items-center relative">
            <p className="font-bold text-xl">No items</p>
            <img
              className="absolute -bottom-12"
              src={props.cartImg}
              alt="cart"
            />
          </div>
        )}
      </section>

      <section className="mt-auto bg-white px-12 py-8">
        {props.activeItemList ? (
          <div className="flex justify-center space-x-4">
            <button className="rounded-xl py-5 px-6 hover:bg-gray-100 font-bold">
              cancel
            </button>
            <button className="rounded-xl py-5 px-6 bg-[#56CCF2] font-bold text-white">
              Complete
            </button>
          </div>
        ) : (
          <>
            <form
              onSubmit={onSaveList}
              className="flex border-2 border-gray-400 rounded-xl overflow-hidden focus-within:border-primary"
            >
              <input
                type="text"
                placeholder="Enter a name"
                className="py-5 px-4 flex-1 bg-transparent focus:outline-none"
                value={data.itemListName}
                onChange={(e) => setData("itemListName", e.target.value)}
              />
              <button
                disabled={!data.itemListName}
                type="submit"
                className="bg-primary text-white font-bold rounded-lg px-6 flex-shrink-0 disabled:bg-gray-400"
              >
                Save
              </button>
            </form>
            <p>{errors.itemListName}</p>
          </>
        )}
      </section>
    </aside>
  );
}

function ListItem({ item }) {
  return (
    <li className="flex items-center justify-between">
      <p className="text-lg font-medium">{item.name}</p>
      <button className="border-2 border-primary rounded-full px-5 py-2 text-primary font-bold text-xs">
        {item.quantity} pcs
      </button>
    </li>
  );
}
