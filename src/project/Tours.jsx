import React from "react";
import { useNavigate } from "react-router-dom";
import "./Contacts.css";

// Массивы туров
export const tours = [
  {
    id: "1",
    title: "Kolsai & Kaindy Lakes Day Tour",
    price: 69,
    duration: "17h",
    image:
      "https://i.pinimg.com/1200x/aa/4e/7b/aa4e7b097a5ab9ec4f1e949ccb63bd28.jpg",
    availability: " all year round",
  },
  {
    id: "2",
    title: "Issyk Lake & Turgen Waterfall",
    price: 35,
    duration: "9‑10h",
    image:
      "https://i.pinimg.com/1200x/af/04/de/af04deef980d44618b748dd5178e2624.jpg",
    availability: "April - November",
  },
  {
    id: "3",
    title: "Assy Plateau + Issyk Lake day jeep tour",
    price: "80",
    duration: "10 hours",
    image:
      "https://i.pinimg.com/1200x/ef/cc/5b/efcc5b15586ea62b391968fa5e0fe1c5.jpg",
    availability: "May - October",
  },
  {
    id: "4",
    title: "Big Almaty Lake half-day tour",
    price: "20",
    duration: "5-6 hours",
    image:
      "https://i.pinimg.com/736x/fd/20/49/fd2049b0bb3adba7d46ec8751d61a5c5.jpg",
    availability: "May - October",
  },
  {
    id: "5",
    title: "Alma-Arasan & Ayusai mountain gorges with hot springs day tour",
    price: "20",
    duration: "7-8 hours",
    image:
      "https://i.pinimg.com/1200x/18/55/85/1855854afb63c02f93b83957a40be20b.jpg",
    availability: " all year round",
  },
  {
    id: "6",
    title: "Almaty city & Shymbulak tour ",
    price: "38",
    duration: "9h",
    image:
      "https://i.pinimg.com/736x/30/34/97/3034973fea27c7fa0a91428601661092.jpg",
    availability: "all year round",
  },
];

export const ShuTours = [
  {
    id: "1",
    title: "Turkestan day tour",
    price: "90",
    duration: "11h",
    image: "https://kazguidedtours.com/img/t10/Turkestan_icon_2.jpg",
    availability: "all year round",
  },
  {
    id: "2",
    title: "Aksu Canyon day trip",
    price: "75",
    duration: "10h",
    image: "https://kazguidedtours.com/img/t_aksu/main_aksu_1.jpg",
    availability: "April - November",
  },
  {
    id: "3",
    title: "Karatau mountains + Aqmeshit cave day trip",
    price: "78",
    duration: "10h",
    image: "https://kazguidedtours.com/img/t_karatau/main_karatau.jpeg",
    availability: "April - November",
  },
];

// HelpBox компонент
const HelpBox = () => (
  <div
    style={{
      borderTop: "1px solid #ccc",
      padding: "20px 0",
      width: "100%",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      marginTop: "40px",
    }}
  >
    <p style={{ margin: "0 0 10px", fontWeight: "bold" }}>Need assistance?</p>
    <p style={{ margin: "0 0 10px" }}>Need help planning a tour itinerary?</p>
    <p style={{ margin: "0 0 15px" }}>Contact us.</p>
    <a
      href="/contacts"
      style={{
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Help
    </a>
  </div>
);

// BookingSteps компонент
const BookingSteps = () => {
  const steps = [
    "Выберите тур, который вам нравится",
    "Забронируйте на странице тура или отправьте заявку",
    "Внесите только 10–30% предоплаты для гарантии",
    "Получите подтверждение и готовьтесь к путешествию!",
  ];

  return (
    <section
      className="booking-steps"
      style={{
        width: "100%",
        backgroundColor: "#f5f8fa",
        padding: "40px 20px",
        boxSizing: "border-box",
        marginTop: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h3 style={{ marginBottom: "10px" }}>Как забронировать тур?</h3>
      <p className="subtitle" style={{ marginBottom: "20px" }}>
        Всего 4 простых шага:
      </p>
      <ol
        className="steps-list"
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {steps.map((step, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "15px",
            }}
          >
            <span
              className="step-number"
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginRight: "15px",
                backgroundColor: "#007bff",
                color: "#fff",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                textAlign: "center",
                lineHeight: "30px",
                flexShrink: 0,
              }}
            >
              {index + 1}
            </span>
            <p style={{ margin: 0 }}>{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

function Tours() {
  const navigate = useNavigate();

  // Обработчик кнопки бронирования
  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <div className="tours-container">
      <h2 className="textalign">Наши туры</h2>
      <div className="tours-grid">
        {tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <h3>{tour.title}</h3>
            <p>
              <strong>Длительность:</strong> {tour.duration}
            </p>

            {tour.price && tour.price !== "" && (
              <p>
                <strong>Цена:</strong> ${tour.price}
              </p>
            )}

            {tour.availability && (
              <p>
                <strong>Доступность:</strong> {tour.availability}
              </p>
            )}

            <button className="button-tours" onClick={handleBookingClick}>
              Забронировать
            </button>
          </div>
        ))}
      </div>

      <h2 className="textalign">Turkestan tour</h2>
      <div className="tours-grid">
        {ShuTours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <h3>{tour.title}</h3>
            <p>
              <strong>Длительность:</strong> {tour.duration}
            </p>

            {tour.price && tour.price !== "" && (
              <p>
                <strong>Цена:</strong> ${tour.price}
              </p>
            )}

            {tour.availability && (
              <p>
                <strong>Доступность:</strong> {tour.availability}
              </p>
            )}

            <button className="button-tours" onClick={handleBookingClick}>
              Забронировать
            </button>
          </div>
        ))}
      </div>

      <HelpBox />

      <BookingSteps />
    </div>
  );
}

export default Tours;
