import React from 'react';
import NavigationHeader from './features/NavigationHeader';
import ContentBody from './features/ContentBody';
import ContentHeader from './features/ContentHeader';

function App() {
  return (
    <div>
      <NavigationHeader />
      <ContentHeader />
      <ContentBody />
    </div>
  );
}

export default App;
