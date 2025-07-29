import React, { useState } from "react";

const dormData = [
  {
    id: 1,
    name: "Алматы студенттер үйі",
    city: "Алматы",
    price: 25000,
    address: "Абая 120, Алматы",
    phone: "+7 700 123 4567",
    mapUrl: "https://goo.gl/maps/your-almaty-location",
    image: "https://source.unsplash.com/400x250/?dormitory",
  },
  {
    id: 2,
    name: "Астана жатақханасы",
    city: "Астана",
    price: 30000,
    address: "Тәуелсіздік 45, Астана",
    phone: "+7 701 456 7890",
    mapUrl: "https://goo.gl/maps/your-astana-location",
    image: "https://source.unsplash.com/400x250/?student-housing",
  },
  {
    id: 3,
    name: "Шымкент жатақханасы",
    city: "Шымкент",
    price: 20000,
    address: "Рысқұлов 17, Шымкент",
    phone: "+7 702 987 6543",
    mapUrl: "https://goo.gl/maps/your-shymkent-location",
    image: "https://source.unsplash.com/400x250/?hostel",
  },
];

function Dormitories() {
  const [selectedCity, setSelectedCity] = useState("Барлығы");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDorms = dormData.filter((dorm) => {
    const matchCity = selectedCity === "Барлығы" || dorm.city === selectedCity;
    const matchSearch = dorm.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCity && matchSearch;
  });

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Жатақхана тізімі</h2>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-6 gap-4">
        <div>
          <label className="text-lg mr-2">Қала:</label>
          <select
            className="border border-gray-300 rounded px-4 py-2"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option>Барлығы</option>
            <option>Алматы</option>
            <option>Астана</option>
            <option>Шымкент</option>
          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Атау бойынша іздеу..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-64"
          />
        </div>
      </div>

      {/* Карточкалар */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredDorms.map((dorm) => (
          <div key={dorm.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <img src={dorm.image} alt={dorm.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-1">{dorm.name}</h3>
              <p className="text-gray-600 mb-1">{dorm.address}</p>
              <p className="text-blue-600 font-bold mb-3">{dorm.price.toLocaleString()} ₸ / ай</p>
              <a
                href={dorm.phone}
                className="text-white bg-blue-600 hover:bg-blue-700 text-sm py-2 px-4 rounded text-center mb-2" >
                Байланысу: {dorm.phone}
              </a>
              <a
                href={dorm.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 underline"
              >
                🗺️ Картада көру
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredDorms.length === 0 && (
        <p className="mt-6 text-gray-500">Тапсырысқа сәйкес жатақхана табылмады.</p>
      )}
    </div>
  );
}

export default Dormitories;