import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeButton from '../Home/HomeButton';
const Profile = () => {
  const [profile, setProfile] = useState({
    username: '',
    techStack: '',
    competitiveRating: '',
    favoriteLanguage: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:3000/profile', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:3000/profile', profile, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setIsEditing(false);
      setProfile(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
            <HomeButton />
      {!isEditing ? (
        <div>
          <h2>Profile</h2>
          <p><strong>Username:</strong> {profile.username}</p>
          <p><strong>Tech Stack:</strong> {profile.techStack}</p>
          <p><strong>Competitive Rating:</strong> {profile.competitiveRating}</p>
          <p><strong>Favorite Language:</strong> {profile.favoriteLanguage}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Edit Profile</h2>
          <input
            type="text"
            name="techStack"
            placeholder="Tech Stack"
            value={profile.techStack}
            onChange={handleChange}
          />
          <input
            type="text"
            name="competitiveRating"
            placeholder="Competitive Rating"
            value={profile.competitiveRating}
            onChange={handleChange}
          />
          <input
            type="text"
            name="favoriteLanguage"
            placeholder="Favorite Language"
            value={profile.favoriteLanguage}
            onChange={handleChange}
          />
          <button type="submit">Update Profile</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
