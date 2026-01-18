import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import menuMockData from "../utils/menuMockData";

const RestaurantMenuAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="max-w-4xl mx-auto my-20 px-4">
      <h1 className="font-extrabold text-4xl mb-10 text-center text-gray-800">
        Restaurant Menu
      </h1>

      {menuMockData.sections.map((section, index) => (
        <div key={index} className="mb-6 rounded-2xl bg-white shadow-md">
          {/* Header */}
          <div
            className="flex justify-between items-center px-6 py-5 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <h2 className="text-lg font-bold">
              {section.title} ({section.items.length})
            </h2>
            <span>{openIndex === index ? "⬆️" : "⬇️"}</span>
          </div>

          {/* Items */}
          {openIndex === index && (
            <div className="px-6 pb-6 space-y-6">
              {section.items.map((item) => (
                <div key={item.id} className="flex gap-6 border-t pt-6">
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="font-bold">₹{item.price}</p>
                  </div>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 rounded-xl object-cover"
                  />

                  <button
                    className="bg-white shadow px-8 py-2 rounded-lg font-bold text-green-600 cursor-pointer"
                    onClick={() => handleAddItem(item)}
                  >
                    ADD+
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuAccordion;
