import React, { useState, useEffect } from 'react';
import './SutudentPages.scss';

const SutudentPages = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://69e05e1129c070e6597b67e3.mockapi.io/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik yuz berdi:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-container student-page">
      <div className="page-header">
        <div>
          <h1>Students Management</h1>
          <p className="subtitle">O'quvchilar ro'yxati va umumiy statistika</p>
        </div>
        <button className="add-btn"><span>+</span> Add Student</button>
      </div>

      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-info">
            <h3>Total Students</h3>
            <p className="stat-number">{loading ? "..." : students.length}</p>
          </div>
          <div className="stat-icon">👥</div>
        </div>
        <div className="stat-card active">
          <div className="stat-info">
            <h3>Active Students</h3>
            <p className="stat-number">
              {loading ? "..." : students.filter(s => s.status === 'Active' || s.status === true || !s.hasOwnProperty('status')).length}
            </p>
          </div>
          <div className="stat-icon">⚡</div>
        </div>
      </div>

      <div className="data-table-container">
        {loading ? (
          <div className="loading-spinner"><p>Loading students...</p></div>
        ) : (
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Group</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="student-id">#{student.id}</td>
                  <td className="student-name">
                    <span className="name-text">{student.name || student.fullName}</span>
                  </td>
                  <td><span className="group-badge">{student.group || "F-102"}</span></td>
                  <td>
                    <span className="status-badge active">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SutudentPages;