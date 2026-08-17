import React from 'react';

export default function LoadingSpinner({ message = "Loading portfolio content..." }) {
  return (
    <div className="loading-container" aria-live="polite">
      <div className="spinner"></div>
      <p className="loading-text">{message}</p>
    </div>
  );
}
