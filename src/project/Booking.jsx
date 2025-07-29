import React, { useState, useEffect } from 'react';
import './Booking.css';

function Booking() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("bookingForm");
    return saved ? JSON.parse(saved) : {
      firstName: '',
      lastName: '',
      startDate: '',
      endDate: '',
      adults: '',
      children: '',
      contactMethod: '',
      whatsapp: '',
      email: '',
      preferences: '',
    };
  });

  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem("bookingForm", JSON.stringify(formData));
  }, [formData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);

 
    localStorage.removeItem("bookingForm");
    setFormData({
      firstName: '',
      lastName: '',
      startDate: '',
      endDate: '',
      adults: '',
      children: '',
      contactMethod: '',
      whatsapp: '',
      email: '',
      preferences: '',
    });

 
    setTimeout(() => setShowSuccess(false), 3000);
  }

  return (
    <div className="form-container">
      <h2>Забронируйте путешествие</h2>

      <form className="tour-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            name="firstName"
            type="text"
            placeholder="Имя *"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            type="text"
            placeholder="Фамилия *"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <input
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
          <input
            name="endDate"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <select name="adults" value={formData.adults} onChange={handleChange} required>
            <option value="">Взрослых</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>

          <select name="children" value={formData.children} onChange={handleChange}>
            <option value="">Детей</option>
            {[...Array(10)].map((_, i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} required>
            <option value="">Как связаться?</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
          </select>
        </div>

        <div className="form-row">
          {formData.contactMethod === "WhatsApp" && (
            <input
              name="whatsapp"
              placeholder="Номер WhatsApp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />
          )}

          {formData.contactMethod === "Email" && (
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          )}
        </div>

        <textarea
          name="preferences"
          placeholder="Пожелания и особые запросы *"
          value={formData.preferences}
          onChange={handleChange}
          // required
        />

        <button type="submit">Отправить</button>
      </form>

      {showSuccess && (
        <div className="success-message">
          ✅ Спасибо, {formData.firstName || 'гость'}! Заявка отправлена.
        </div>
      )}
    </div>
  );
}

export default Booking;
