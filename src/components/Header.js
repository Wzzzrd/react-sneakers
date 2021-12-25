import React from 'react'

export default function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} alt="logo" src="/img/image 4.png" />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
        <ul className="d-flex align-center">
          <li className="mr-20 align-center">
          <img width={18} height={18} alt="logo" src="/img/cart.svg" />
            <span>1205 rub.</span>
          </li>
          <li>
          <img width={18} height={18} alt="logo" src="/img/favourite.png" />
          </li>
          
        </ul>
      </header>
    )
}
