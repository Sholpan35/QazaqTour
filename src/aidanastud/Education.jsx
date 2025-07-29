import React, { useState } from "react";

const courses = [
  {
    id: 1,
    title: "Ағылшын тілі (Beginner)",
    mode: "Онлайн",
    city: "Барлық қалалар",
    category: "Тіл курсы",
    price: "Тегін",
    link: "https://t.me/english_course_free",
  },
  {
    id: 2,
    title: "Web-бағдарламалау негіздері",
    mode: "Онлайн",
    city: "Барлық қалалар",
    category: "IT",
    price: "10 000 ₸ / ай",
    link: "https://t.me/webdev_course",
  },
  {
    id: 3,
    title: "ҰБТ-ға дайындық (математика)",
    mode: "Оффлайн",
    city: "Шымкент",
    category: "Дайындық",
    price: "15 000 ₸ / ай",
    link: "https://t.me/unt_math_shymkent",
  },
];

function Education() {
  const [selectedMode, setSelectedMode] = useState("Барлығы");
  const [selectedCategory, setSelectedCategory] = useState("Барлығы");

  const filteredCourses = courses.filter((course) => {
    const matchMode = selectedMode === "Барлығы" || course.mode === selectedMode;
    const matchCat = selectedCategory === "Барлығы" || course.category === selectedCategory;
    return matchMode && matchCat;
  });

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Оқу курстары</h2>

      {/* Фильтрлер */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div>
          <label className="text-lg mr-2">Формат:</label>
          <select
            className="border rounded px-4 py-2"
            value={selectedMode}
            onChange={(e) => setSelectedMode(e.target.value)}
          >
            <option>Барлығы</option>
            <option>Онлайн</option>
            <option>Оффлайн</option>
          </select>
        </div>

        <div>
          <label className="text-lg mr-2">Сала:</label>
          <select
            className="border rounded px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>Барлығы</option>
            <option>Тіл курсы</option>
            <option>IT</option>
            <option>Дайындық</option>
          </select>
        </div>
      </div>

    
      <div className="grid md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white shadow rounded p-5">
            <h3 className="text-xl font-semibold mb-1">{course.title}</h3>
            <p className="text-gray-600">📚 {course.category}</p>
            <p className="text-gray-600">💻 {course.mode}</p>
            <p className="text-blue-600 font-bold mb-3">💰 {course.price}</p>
            <a
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
            >
              Курсты көру
            </a>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <p className="mt-6 text-gray-500">Сүзгіге сай курс табылмады.</p>
      )}
    </div>
  );
}

export default Education;