import React, { useState, useEffect } from 'react';
import './TeachersPages.scss';

const TeachersPages = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://69e05e1129c070e6597b67e3.mockapi.io/teachers")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container teachers-page">
      <div className="page-header">
        <div>
          <h1>Teachers Directory</h1>
          <p className="subtitle">Malakali ustozlar va professorlar tarkibi</p>
        </div>
        <button className="add-btn"><span>+</span> Add Teacher</button>
      </div>

      {loading ? (
        <div className="loading-spinner"><p>Loading teachers...</p></div>
      ) : (
        <div className="teachers-grid">
          {teachers.map((teacher) => (
            <div className="teacher-card" key={teacher.id}>
              <div className="card-accent"></div>
              <div className="teacher-avatar">
                {teacher.avatar && !teacher.avatar.includes("placeholder") ? (
                  <img src={teacher.avatar} alt={teacher.name} />
                ) : (
                  <div className="emoji-avatar">👨‍💻</div>
                )}
              </div>
              <h2>{teacher.name}</h2>
              <p className="subject">{teacher.subject || "Frontend Developer"}</p>
              <div className="card-footer">
                <span className="badge-type">{teacher.type || "Full-Time"}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeachersPages;