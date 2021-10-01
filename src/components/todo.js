import React from 'react';

export default function Todo({ todo: { id, text, done }, toggle }) {
  return (
    <div
      onClick={() => toggle(id)}
      style={{
        cursor: 'pointer',
        textDecoration: done ? 'line-through' : undefined,
      }}
    >
      {text}
    </div>
  );
}
