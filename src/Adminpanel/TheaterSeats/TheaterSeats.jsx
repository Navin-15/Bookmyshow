import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SEAT_PRICE = {
  platinum: 150,
  gold: 130,
  silver: 100,
};

const ROWS = {
  platinum: ['A','B','C','D','E','F','G'],
  gold: ['H','I','J','K','L', 'M', 'N'],
  silver: ['O','P']
};

const AdminSeatlayout = () => {
  const location = useLocation();

  const [blockedSeats, setBlockedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [theater, setTheater] = useState('');
  const [movieName, setMovieName] = useState('');
  const [screen, setScreen] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (location.state) {
      setTheater(location.state.theater || '');
      setMovieName(location.state.movieName || '');
      setScreen(location.state.screen || '');
      setTime(location.state.time || '');
    }
  }, [location.state]);

  useEffect(() => {
    const fetchBlocked = async () => {
      if (!theater || !movieName || !screen || !time) return;
      const params = {
        theater,
        movieName,
        screen,
        time,
        date: date.toLocaleDateString()
      };
      const res = await axios.get('http://localhost:5000/api/admin/blocked-seats', { params });
      setBlockedSeats(res.data || []);
    };

    fetchBlocked();
  }, [theater, movieName, screen, time, date]);

  const toggleBlockSeat = (row, seat, type) => {
    const seatId = `${row}${seat}`;
    const isBlocked = blockedSeats.includes(seatId);

    if (isBlocked) {
      setBlockedSeats(prev => prev.filter(id => id !== seatId));
    } else {
      setBlockedSeats(prev => [...prev, seatId]);
    }

    setSelectedSeats(prev => {
      const exists = prev.find(s => s.id === seatId);
      return exists ? prev.filter(s => s.id !== seatId) : [...prev, { id: seatId, type }];
    });
  };

  const getSeatClass = (row, seat) => {
    const seatId = `${row}${seat}`;
    const isBlocked = blockedSeats.includes(seatId);
    const isSelected = selectedSeats.find(s => s.id === seatId);
    if (isBlocked) return 'seatno blocked-seat'; // custom gray class
    if (isSelected) return 'seatno selected-seat';
    return 'seatno availabledouble';
  };

  const saveBlockedSeats = async () => {
    const payload = {
      theater,
      movieName,
      screen,
      time,
      date: date.toLocaleDateString(),
      seats: blockedSeats
    };
    try {
      await axios.post('http://localhost:5000/api/admin/block-seats', payload);
      alert('Blocked seats saved.');
    } catch (err) {
      console.error(err);
      alert('Failed to save.');
    }
  };

  return (
    <div className="admin-seatlayout container my-4">
      <h3>Admin Seat Layout - Block/Unblock Seats</h3>
      <p><strong>Movie:</strong> {movieName} | <strong>Theater:</strong> {theater} | <strong>Screen:</strong> {screen} | <strong>Time:</strong> {time} | <strong>Date:</strong> {date.toLocaleDateString()}</p>

      <div className="screen my-3 text-center bg-dark text-white py-2">Screen</div>

      <div className="seat-blocks">
        {Object.keys(ROWS).map(category => (
          <div key={category} className="mb-3">
            <h5 className="text-capitalize">{category} - Rs.{SEAT_PRICE[category]}</h5>
            {ROWS[category].map(row => (
              <div key={row} className="d-flex align-items-center mb-2">
                <strong className="me-3">{row}</strong>
                {[...Array(23).keys()].map(i => {
                  const seatNo = 23 - i;
                  if (seatNo === 17 || seatNo === 7) return <div key={i} className="seatempty" style={{ width: "30px" }}></div>;
                  return (
                    <div key={i} className="seatempty">
                      <a
                        href="#"
                        className={getSeatClass(row, seatNo)}
                        onClick={e => {
                          e.preventDefault();
                          toggleBlockSeat(row, seatNo, category);
                        }}
                      >
                        {seatNo}
                      </a>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button className="btn btn-primary" onClick={saveBlockedSeats}>
          Save Blocked Seats
        </button>
      </div>
    </div>
  );
};

export default AdminSeatlayout;


