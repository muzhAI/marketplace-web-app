import React from 'react';

export default function User({ match }) {
  return (
    <div>
      <h1>
Hello User:
{' '}
{match.params.id}
</h1>
    </div>
  );
}
