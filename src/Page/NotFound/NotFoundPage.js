// src/Page/NotFound/NotFoundPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.link}>Go back to the homepage</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#343a40',
  },
  message: {
    fontSize: '1.5rem',
    color: '#6c757d',
  },
  link: {
    marginTop: '1rem',
    fontSize: '1.25rem',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default NotFoundPage;
