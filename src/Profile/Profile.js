import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
const styles = {
  profileSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'radial-gradient(circle, black, #1c4e6d)',
  },
  profileContainer: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  },
  profileCard: {
    textAlign: 'center',
  },
  profileAvatarContainer: {
    marginBottom: '20px',
  },
  profileAvatar: {
    width: '150px',
    borderRadius: '30%',
  },
  profileDetails: {
    marginBottom: '20px',
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: '5px',
  },
  detailValue: {
    fontSize: '1.1rem',
    color: '#555',
  },
  hr: {
    margin: '15px 0',
    borderColor: '#eee',
  },
  btn: {
    padding: '12px 24px',
    borderRadius: '25px',
    fontSize: '1.1rem',
    border: 'none',
    cursor: 'pointer',
    margin: '5px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
    color: '#fff',
  },
  btnPrimary: {
    background: 'radial-gradient(circle, #4a2c2a, #1b1b1b)',
  },
  btnSuccess: {
    background: 'radial-gradient(circle, #2c6b4f, #1a3e2b)',
  },
  formGroup: {
    textAlign: 'left',
  },
  formControl: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  buttonContainer: {
    marginTop: '20px',
  },
};

export default function MyProfile() {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    gender: '',
    mobile: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleEditSave = () => {
    setIsEditing(!isEditing);
  };

  const handleBack = () => {
    navigate('/homepage2');
  };

  
  const avatarUrl = userDetails.gender
    ? userDetails.gender === 'male'
      ? 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
      : 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2.webp'
    : 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'; // Default person icon

  return (
    <div style={styles.profileSection}>
      <div style={styles.profileContainer}>
        <div style={styles.profileCard}>
          <div style={styles.profileAvatarContainer}>
            <img
              src={avatarUrl}
              alt="avatar"
              style={styles.profileAvatar}
            />
          </div>

          <div style={styles.profileDetails}>
            {isEditing ? (
              <form>
                <div style={styles.formGroup}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    style={styles.formControl}
                    name="fullName"
                    value={userDetails.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Email</label>
                  <input
                    type="email"
                    style={styles.formControl}
                    name="email"
                    value={userDetails.email}
                    onChange={handleChange}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Gender</label>
                  <select
                    style={styles.formControl}
                    name="gender"
                    value={userDetails.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div style={styles.formGroup}>
                  <label>Mobile</label>
                  <input
                    type="text"
                    style={styles.formControl}
                    name="mobile"
                    value={userDetails.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div style={styles.formGroup}>
                  <label>Address</label>
                  <input
                    type="text"
                    style={styles.formControl}
                    name="address"
                    value={userDetails.address}
                    onChange={handleChange}
                  />
                </div>
              </form>
            ) : (
              <>
                <p style={styles.detailLabel}>Full Name</p>
                <p style={styles.detailValue}>{userDetails.fullName}</p>
                <hr style={styles.hr} />
                <p style={styles.detailLabel}>Email</p>
                <p style={styles.detailValue}>{userDetails.email}</p>
                <hr style={styles.hr} />
                <p style={styles.detailLabel}>Mobile</p>
                <p style={styles.detailValue}>{userDetails.mobile}</p>
                <hr style={styles.hr} />
                <p style={styles.detailLabel}>Gender</p>
                <p style={styles.detailValue}>{userDetails.gender}</p>
                <hr style={styles.hr} />
                <p style={styles.detailLabel}>Address</p>
                <p style={styles.detailValue}>{userDetails.address}</p>
              </>
            )}
          </div>

          <div style={styles.buttonContainer}>
            <button
              style={{
                ...styles.btn,
                ...(isEditing ? styles.btnSuccess : styles.btnPrimary),
              }}
              onClick={handleEditSave}
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
            <button
              style={{
                ...styles.btn,
                ...styles.btnPrimary,
              }}
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
