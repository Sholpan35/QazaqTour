import React from "react";
import "./Contacts.css";

const attractions = [
  {
    id: 1,
    title: "Большое Алматинское озеро",
    description: "Горное озеро на высоте 2511 метров над уровнем моря.",
    image: "https://i.pinimg.com/1200x/d8/27/0a/d8270a7fe775ac4a9f890faa50e074af.jpg",
    link: "https://ru.wikipedia.org/wiki/Большое_Алматинское_озеро",
  },
  {
    id: 2,
    title: "Медеу",
    description: "Высокогорный каток и комплекс в ущелье Медеу.",
    image:"https://i.pinimg.com/736x/be/df/10/bedf10ba24b35af11764cce766a8c101.jpg",
    link: "https://ru.wikipedia.org/wiki/Медеу_(каток)",
  },
  {
    id: 3,
    title: "Чарынский каньон",
    description: "Казахстанский аналог Гранд-Каньона.",
    image:"https://i.pinimg.com/1200x/83/f2/42/83f242245341b1113f93df17f9e8e281.jpg",
    link: "https://ru.wikipedia.org/wiki/Чарынский_каньон",
  },
  {
    id: 4,
    title: "Кок-Тобе",
    description: "Гора и парк развлечений с видом на Алматы.",
    image:"https://i.pinimg.com/736x/78/a2/b1/78a2b17f46e417223923423e0167041a.jpg",
    link: "https://ru.wikipedia.org/wiki/Кок-Тобе",
  },
  {
    id: 5,
    title: "Горнолыжный курорт Шымбулак",
    description: "Современный курорт рядом с Медеу.",
    image:"https://i.pinimg.com/1200x/e8/c4/2f/e8c42ff82a96cfa4c212e861fd94760b.jpg",
    link: "https://ru.wikipedia.org/wiki/Шымбулак",
  },
  {
    id: 6,
    title: "Центральный Государственный музей Казахстана",
    description: "Один из крупнейших музеев Центральной Азии.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%93%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8_%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD.JPG/1200px-%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%93%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8_%D0%9A%D0%B0%D0%B7%D0%B0%D1%85%D1%81%D1%82%D0%B0%D0%BD.JPG",
    link: "https://ru.wikipedia.org/wiki/Центральный_государственный_музей_Казахстана",
  },
  {
    id: 7,
    title: "Парк 28 гвардейцев-панфиловцев",
    description: "Исторический парк в центре города.",
    image:"https://i.pinimg.com/1200x/a3/48/86/a34886d2cae16f1d2528f8458b2d9cc1.jpg",
    link: "https://ru.wikipedia.org/wiki/Парк_28_гвардейцев-панфиловцев",
  },
  {
    id: 8,
    title: "Вознесенский собор (Зенковский собор)",
    description: "Один из самых высоких деревянных храмов в мире.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C_%D0%92%D0%BE%D0%B7%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%281%29.jpg/1200px-%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B%2C_%D0%92%D0%BE%D0%B7%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%281%29.jpg",
    link: "https://ru.wikipedia.org/wiki/Вознесенский_кафедральный_собор_(Алма-Ата)",
  },
  {
    id: 9,
    title: "Алматинский ботанический сад",
    description: "Просторный парк с редкими растениями.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/14_%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B1%D0%BE%D1%82%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%B0%D0%B4.jpg/2560px-14_%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D0%B1%D0%BE%D1%82%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%B0%D0%B4.jpg",
    link: "https://ru.wikipedia.org/wiki/Ботанический_сад_(Алматы)",
  },
  {
    id: 10,
    title: "Площадь Республики",
    description: "Главная городская площадь с монументами.",
    image:"https://d31qtdfy11mjj9.cloudfront.net/places/1563898496554173521.jpg",
    link: "https://ru.wikipedia.org/wiki/Площадь_Республики_(Алма-Ата)",
  },
  {
    id: 11,
    title: "Арбат (пешеходная улица Жибек Жолы)",
    description: "Улица с сувенирами, кафе и уличными артистами.",
    image:"https://welcome.kz/ru/assets/images/products/0_gallery/locations/almaty/zhibek-zholy-st.jpeg",
    link: "https://ru.wikipedia.org/wiki/Алматинский_Арбат",
  },
  {
    id: 12,
    title: "Центральная мечеть Алматы",
    description: "Одна из крупнейших мечетей Казахстана.",
    image:"https://visitalmaty.kz/wp-content/uploads/2022/02/%D0%9C%D0%B5%D1%87%D0%B5%D1%82%D1%8C-%D0%B1%D0%B0%D0%B9%D0%BA%D0%B5%D0%BD-1-1050x662.jpg",
    link: "https://ru.wikipedia.org/wiki/Центральная_мечеть_(Алматы)",
  },
  {
    id: 13,
    title: "Телебашня Кок-Тобе",
    description: "Огромная телебашня — символ города.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMgayGwF1xyJvvbl12yf_q6jM3R19UWk0mA&s",
    link: "https://ru.wikipedia.org/wiki/Телебашня_Кок-Тобе",
  },
  {
    id: 14,
    title: "Алматинский цирк",
    description: "Советское здание цирка, действующий до сих пор.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQ0wJYq0qVzqcTZC328pz6u4z3FkKFzN8hw&s",
    link: "https://ru.wikipedia.org/wiki/Алматинский_цирк",
  },
  {
    id: 15,
    title: "Национальная библиотека РК",
    description: "Современная библиотека с архитектурным дизайном.",
    image:"https://upload.wikimedia.org/wikipedia/commons/4/43/National_Library_of_the_Republic_of_Kazakhstan_in_Almaty.jpg",
    link: "https://ru.wikipedia.org/wiki/Национальная_библиотека_Республики_Казахстан",
  },
  {
    id: 16,
    title: "Государственный музей искусств им. Кастеева",
    description: "Главный художественный музей Казахстана.",
    image:"https://upload.wikimedia.org/wikipedia/commons/2/2a/Rooms_of_State_Museum_of_Arts%2C_Almaty_03.jpg",
    link: "https://ru.wikipedia.org/wiki/Государственный_музей_искусств_Казахстана",
  },
  {
    id: 17,
    title: "Зоопарк Алматы",
    description: "Старейший зоопарк Казахстана.",
    image:"https://vitalik.kz/wp-content/uploads/2018/08/%D0%97%D0%BE%D0%BE%D0%BF%D0%B0%D1%80%D0%BA-%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B-2018.jpg",
    link: "https://ru.wikipedia.org/wiki/Алматинский_зоопарк",
  },
  {
    id: 18,
    title: "Казахская государственная филармония им. Жамбыла",
    description: "Культурный центр и концертный зал.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7cf56vmobqshFE8imKvbWsWtB5_sgMpduCGUmIU-nWH2dicSEgmSBkY_7w2QhMJCWzY&usqp=CAU",
    link: "https://ru.wikipedia.org/wiki/Казахская_государственная_филармония",
  },
  {
    id: 19,
    title: "Театр оперы и балета им. Абая",
    description: "Главный оперный театр страны.",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/MAX_3802.jpg/250px-MAX_3802.jpg",
    link: "https://ru.wikipedia.org/wiki/Казахский_государственный_академический_театр_оперы_и_балета",
  },
  {
    id: 20,
    title: "Горельеф Сакена Сейфуллина",
    description: "Памятник казахскому поэту и писателю.",
    image:"https://e-history.kz/storage/tmp/resize/news/1200_0_4560e41803ef47607c79d4a6dde723c8.jpg",
    link: "https://ru.wikipedia.org/wiki/Сакен_Сейфуллин",
  },
];

const Attractions= () => {
  return (
    <div className="attractions-container">
      <h1>Достопримечательности Алматы</h1>
      <div className="attractions-grid">
        {attractions.map(({ id, title, description, image, link }) => (
          <div key={id} className="attraction-card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more-btn"
            >
              Читать подробнее →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attractions;