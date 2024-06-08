import { useForm, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";

export default function NewItemForm({ onCloseForm }) {
  const { data, setData, post, errors, wasSuccessful } = useForm({
    name: "",
    note: "",
    image: "",
    category_name: "",
  });

  function onSubmitForm(e) {
    e.preventDefault();
    post("items/create");
    onCloseForm();
  }

  useEffect(() => {
    if (wasSuccessful) onCloseForm();
  }, [wasSuccessful]);

  return (
    <form
      className="w-[389px] px-10 py-8 flex flex-col bg-gray-50"
      onSubmit={onSubmitForm}
    >
      <h2 className="font-medium text-2xl mb-8">Add a new item</h2>
      <FormField name={"name"} label={"Name"} errorMessage={errors.name}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => setData("name", e.target.value)}
          autoComplete="off"
          placeholder="Enter a name"
          className="border-2 rounded-xl border-gray-300 px-4 py-5 focus:outline-primary"
        />
      </FormField>
      <FormField
        name={"note"}
        label={"Note (optional)"}
        errorMessage={errors.note}
      >
        <textarea
          name="note"
          value={data.note}
          onChange={(e) => setData("note", e.target.value)}
          placeholder="Enter a note"
          className="border-2 rounded-xl border-gray-300 px-4 py-5 focus:outline-primary"
        />
      </FormField>
      <FormField
        name={"image"}
        label={"Image (optional)"}
        errorMessage={errors.image}
      >
        <input
          type="text"
          autoComplete="off"
          value={data.image}
          onChange={(e) => setData("image", e.target.value)}
          name="image"
          placeholder="Enter a url"
          className="border-2 rounded-xl border-gray-300 px-4 py-5 focus:outline-primary"
        />
      </FormField>
      <FormField
        name={"category"}
        label={"Category"}
        errorMessage={errors.category_name}
      >
        <CategoryInput
          value={data.category_name}
          onChangeValue={(value) => setData("category_name", value)}
        />
      </FormField>

      <div className="flex items-center justify-center mt-auto space-x-3">
        <button
          onClick={onCloseForm}
          className="text-black font-bold rounded-xl px-6 py-5 hover:bg-gray-200"
        >
          cancel
        </button>
        <button
          type="submit"
          className="bg-primary text-white font-bold rounded-xl px-6 py-5"
        >
          Save
        </button>
      </div>
    </form>
  );
}

function FormField({ children, label, name, errorMessage }) {
  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={name} className="mb-1.5 font-medium text-sm">
        {label}
      </label>
      {children}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}

function ErrorMessage({ children }) {
  return <p className="text-red-500 font-medium mt-2">{children}</p>;
}

function CategoryInput({ value, onChangeValue }) {
  const [isOpen, setIsOpen] = useState(false);
  const { props } = usePage();
  const dropdownRef = useRef(null);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => [
      document.removeEventListener("mousedown", handleClickOutside),
    ];
  }, []);

  return (
    <div className="relative">
      <input
        type="text"
        autoComplete="off"
        name="category"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        onFocus={() => setIsOpen(true)}
        placeholder="Enter a category"
        className="border-2 rounded-xl border-gray-300 px-4 py-5 focus:outline-primary w-full"
      />
      {isOpen && props.categories.length > 0 && (
        <ul
          ref={dropdownRef}
          className="absolute w-full max-h-[200px] overflow-y-auto rounded-xl p-2 top-20 bg-white border space-y-1"
        >
          {props.categories.map((category) => (
            <li
              key={category.id}
              onClick={() => {
                onChangeValue(category.name);
                setIsOpen(false);
              }}
              className="py-3 px-5 rounded-xl hover:bg-gray-100 cursor-pointer"
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
