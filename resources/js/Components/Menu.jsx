import { PencilIcon } from "lucide-react";
import React, { useState } from "react";
import NewItemForm from "./NewItemForm";

export default function Menu() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (isFormOpen)
    return <NewItemForm onCloseForm={() => setIsFormOpen(false)} />;

  return (
    <aside className="bg-[#FFF0DE] flex flex-col w-[389px]">
      <section className="py-11 px-12">
        <div className="rounded-3xl bg-[#80485B] py-4 flex mb-11">
          <div className="relative w-[130px]">
            <img
              src="images//source.svg"
              alt="bottle-logo"
              className="absolute -top-9 left-0 h-[150px] object-cover"
            />
          </div>

          <div>
            <h3 className="text-white font-bold mb-3 flex-1">
              Didn’t find what you need?
            </h3>
            <button
              onClick={() => setIsFormOpen(true)}
              className="rounded-xl text-sm font-bold px-7 py-3 bg-white"
            >
              Add item
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-10">
          <h2 className="font-bold text-2xl text-zinc-700">Shopping list</h2>
          <button>
            <PencilIcon size={24} />
          </button>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-600 mb-5">
            Fruit and vegetables
          </h4>
          <ul className="space-y-6">
            <li className="flex items-center justify-between">
              <p className="text-lg font-medium">Avocado</p>
              <button className="border-2 border-primary rounded-full px-5 py-2 text-primary font-bold text-xs">
                3 pcs
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-auto bg-white px-12 py-8">
        <div className="flex border-2 border-primary rounded-xl overflow-hidden">
          <input
            type="text"
            placeholder="Enter a name"
            className="py-5 px-4 flex-1 bg-transparent focus:outline-none"
          />
          <button className="bg-primary text-white font-bold rounded-lg px-6 flex-shrink-0">
            Save
          </button>
        </div>
      </section>
    </aside>
  );
}
