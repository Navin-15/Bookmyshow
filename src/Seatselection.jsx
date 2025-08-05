import React, { useState } from 'react';
import Modal from 'react-modal'; // install via npm if needed
import Summary from './Summary';  // ensure this file exists!

Modal.setAppElement('#root');

const PRICES = { Platinum: 150, Gold: 130, Silver: 100 };
const CONVENIENCE_FEE = 23.4;

export default function SeatSelection() {
  const [selected, setSelected] = useState([]);
  const [showModal, setShowModal] = useState(false);



  const toggleSeat = (row, num, category) => {
    if (!num) return;
    const id = `${row}${num}`;
    
    setSelected(prev =>
      prev.some(s => s.id === id)
        ? prev.filter(s => s.id !== id)
        : prev.length < 10
          ? [...prev, { id, category }]
          : prev
    );
  };

  const itemsTotal = selected.reduce((sum, s) => sum + PRICES[s.category], 0);
  const subtotal = itemsTotal + CONVENIENCE_FEE;

  return (
    <>
      {/* Render seat grid (only platinum shown for brevity) */}
      <div className='bg-warning container'>
        <h4>Platinum</h4>
        {['A','B','C','D','E'].map(row => (
          <div key={row} style={{ display: 'flex', margin: 4 }}>
            <strong style={{ width: 20 }}>{row}</strong>
            {[1,2,3,4,5,6,7,8,9,10].map(num => {
              const id = `${row}${num}`;
              const active = selected.some(s => s.id === id);
              return (
                <div
                  key={num}
                  onClick={() => toggleSeat(row, id, 'Platinum')}
                  style={{
                    width: 30, height: 30, margin: 2,
                    background: active ? '#008000' : '#fff',
                    border: '1px solid #000',
                    cursor: 'pointer',
                    textAlign: 'center',
                    lineHeight: '30px'
                  }}
                >{num}</div>
              );
            })}
          </div>
        ))}
      </div>
      <div className='bg-warning container'>
        <h4>Gold</h4>
        {['A','B','C','D','E'].map(row => (
          <div key={row} style={{ display: 'flex', margin: 4 }}>
            <strong style={{ width: 20 }}>{row}</strong>
            {[1,2,3,4,5,null,null,,null,null,6,7,8,9,10].map(num => {
              const id = `${row}${num}`;
              const active = selected.some(s => s.id === id);
              return (
                <div
                  key={num}
                  onClick={() => toggleSeat(row, id, 'Gold')}
                  style={{
                    width: 30, height: 30, margin: 2,
                    background: active ? '#8f8' : '#fff',
                    border: '1px solid #000',
                    cursor: 'pointer',
                    textAlign: 'center',
                    lineHeight: '30px'
                  }}
                >{num}</div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Pay button */}
      <div
        style={{
          marginTop: 20,
          padding: 10,
          background: '#f00',
          color: '#fff',
          textAlign: 'center',
          cursor: 'pointer'
        }}
        onClick={() => setShowModal(true)}
      >
        Pay: Rs.{subtotal.toFixed(2)}
      </div>

      {/* Summary Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{ content: { maxWidth: 400, margin: 'auto' } }}
      >
        <Summary
          category={selected[0]?.category}
          seats={selected.map(s => s.id)}
          seatPrice={PRICES[selected[0]?.category] || 0}
          convenienceFee={CONVENIENCE_FEE}
        />
        <button onClick={() => setShowModal(false)}>Close</button>
      </Modal>
    </>
  );
}
