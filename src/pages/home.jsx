import React from 'react';
import PageTitle from '../Components/PageTitle';

const home = () => {
  return (
    <>
      <PageTitle title="Home"/>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Home Page</h1>
      </div>
    </>
  );
};

export default home;