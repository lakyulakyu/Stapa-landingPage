import React from 'react'

export async function getServerSideProps({ params }) {
    const dataId = params.id;
    return {
      props: {
        dataId,
      },
    };
  }
  function DataDetail({ dataId }) {
  
  
    return (
      <div>
        <h1>Data ID: {dataId}</h1>
      </div>
    );
  }
  
  export default DataDetail;
  