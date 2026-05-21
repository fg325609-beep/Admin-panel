import React, { useState, useEffect } from 'react';
import './ContactPages.scss';

const ContactPages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://69e05e1129c070e6597b67e3.mockapi.io/students")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container contact-page">
      <div className="page-header">
        <div>
          <h1>Messages & Feedback</h1>
          <p className="subtitle">Foydalanuvchilardan kelgan oxirgi taklif va xabarlar ro'yxati</p>
        </div>
      </div>

      <div className="messages-list">
        {loading ? (
          <div className="loading-spinner">
            <p>Loading messages...</p>
          </div>
        ) : (
          messages.slice(0, 5).map((msg) => (
            <div className={`message-item ${msg.unread ? 'unread' : ''}`} key={msg.id}>
              <div className="msg-left">
                {msg.avatars ? (
                  <img src={msg.avatars} alt={msg.name} className="user-avatar" />
                ) : (
                  <div className="avatar-placeholder">{msg.name ? msg.name[0] : 'U'}</div>
                )}
              </div>
              <div className="msg-body">
                <div className="msg-header">
                  <h4>{msg.name || "Anonim Foydalanuvchi"}</h4>
                  <span className="msg-time">
                    {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : "Just now"}
                  </span>
                </div>
                <p className="msg-text">
                  {msg.message || "Yangi darslar jadvali bo'yicha taklifim bor edi, qachon gaplashsak bo'ladi?"}
                </p>
              </div>
              {msg.unread && <span className="unread-dot"></span>}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactPages;