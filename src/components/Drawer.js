import React from 'react'


function Drawer() {
    return (
        <div style={{display: 'none'}}  className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="d-flex justify-between">
            Корзина <img className="removeBtn cu-p" alt="remove" src="/img/btn-remove.svg" />
          </h2>
        
      <div className="items ">
        <div className="cartitems">
        <div className="cartItem d-flex align-center mb-20 flex-1">
        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b className="mt-5">12 999 руб.</b>
          </div>
          <img className="removeBtn" alt="remove" src="/img/btn-remove.svg" />
        </div>
        <div className="cartItem d-flex align-center mb-20">
        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg"></div>
          <div className="mr-20 flex">
            <p>Мужские Кроссовки Nike Air Max 270</p>
            <b className="mt-5">12 999 руб.</b>
          </div>
          <img className="removeBtn" alt="remove" src="/img/btn-remove.svg" />
      </div>
        </div>
      </div>
      <div className="cartTotalBlock">
      <ul>
          <li >
            <span>Итого</span>
            <div ></div>
            <b>21 498 руб. </b>
          </li >
          <li >
            <span>Налог 5%: </span>
            <div ></div>
            <b>1074 руб.  </b>
          </li>
        </ul>
        <button className="greenButton">Оформить заказ <img alt="arrow" src="/img/Arrow.svg" /></button>
      </div>
      </div>
    </div>
    )
}

export default Drawer
