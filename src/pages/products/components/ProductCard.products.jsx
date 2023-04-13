import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const Ref = useRef(null);
  const [timer, setTimer] = useState('00:00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    const { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        `${hours > 9 ? hours : `0${hours}`}:${minutes > 9 ? minutes : `0${minutes}`}:${
          seconds > 9 ? seconds : `0${seconds}`
        }`
      );
    }
  };

  const timeGenerator = Math.random() * (181 - 60) + 60;
  const randomTime = Math.floor(timeGenerator);
  const clearTimer = (e) => {
    const minutes = Math.floor(randomTime / 60);
    const seconds = randomTime - minutes * 60;
    setTimer(`00:${minutes}:${seconds}`);

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + randomTime);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  const handleClick = () => {
    navigate(`/home/detail/${product.id}`);
  };

  return (
    <article className="product__card" key={product.id}>
      <picture className="product__image-container">
        <img src={product.image} alt="Product" />
      </picture>
      <div className="product__title">
        <p>{product.title}</p>
      </div>
      <div className="detail__info">
        <p>{timer}</p>

        <button
          type="button"
          className="detail__button"
          onClick={handleClick}
          disabled={timer === '00:00:00'}
        >
          Go to detail
        </button>
      </div>
    </article>
  );
};
