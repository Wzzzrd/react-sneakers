import React from 'react'

export default function Card() {
    return (
        <div className="card">
          <div className="like">
          <img alt="likeBtn" src="/img/NotLiked.svg" />
          </div>
          <img width={133} height={112} alt="sneakerImg" src="/img/sneakers/5.jpg" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
            <span>Цена: </span>
            <b>12 999 rub.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/Vector.svg" alt="plus" />
          </button>
          </div>
        </div>
        )
}
