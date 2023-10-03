import React, { useEffect, useState } from 'react';
import Clipboard from './Clipboard';
import './CardDesign.css';

function BlockHeight() {
  const [blockData, setBlockData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isReloading, setIsReloading] = useState(true);

  const fetchBlockData = () => {
    setIsLoading(true);
    fetch("https://mempool.space/api/v1/blocks")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBlockData(data[0]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setIsReloading(false);
    }, 8000);

    fetchBlockData();

    const interval = setInterval(() => {
      fetchBlockData();
    }, 2 * 60 * 1000);

    return () => {
      clearTimeout(loadingTimeout);
      clearInterval(interval);
    };
  }, []);

  if (isReloading) {
    return (
      <div className="card">
        <div className="header-background">   </div>
        <h1 className='text'>{blockData && blockData.height}</h1>
        <div className="load-wrapp">
          <div className="load-2">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="header-background">   </div>
      <div className="content">
        <h1 className='text'>{blockData && blockData.height}</h1>
        {isLoading ? (
          <div className="load-wrapp">
            <div className="load-2">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        ) : (
          <div className="card-information">
        <div>  <p style={{ color: 'blue' }}>Hash: <span style={{ color: 'green' }}>{blockData && blockData.id}</span></p></div>
          <div className="height-container">
            <p style={{ color: 'blue' }}>BlockHeight:   <span style={{ color: 'green' }}>{blockData && blockData.height}</span></p>
          <span> <Clipboard input={blockData && blockData.height} /> </span>
          </div>
          <div>    <p style={{ color: 'blue' }}># tx:      <span style={{ color: 'green' }}>{blockData && blockData.tx_count}</span></p></div>
        </div>
        )}
      </div>
    </div>
  );
}

export default BlockHeight;
