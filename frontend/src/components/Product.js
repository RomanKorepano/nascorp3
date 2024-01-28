import React from 'react';
import './Product.css';


function Product({ id, image, title, price, setBasket, setBasketPrice, setBasketQty, basket, setMessage, setModalBox, token }) {

  const product = {
    id: id,
    image: image,
    title: title,
    price: price
  }

  function addToBasket() {
    const index = basket.findIndex(value => value.id === product.id)
    // console.debug(index)

    if (index === -1) {
      setBasket(prevState => [...prevState, product])
      setBasketPrice(current => current + product.price)
      setBasketQty(current => current + 1)
    } else {
      return
    }

    setTimeout(() => {
      setMessage('Товар добавлен в корзину.')
      setModalBox('MessageBox')
    }, 100)
  }

  function AddToBasketButton() {
    if (token !== null) {
      return (
        <>
          <button className='buy' onClick={() => addToBasket()}>В корзину</button>
        </>
      )
    } else {
      return (
        <>
          <p>Для заказа необходима авторизация</p>
        </>
      )
    }
  }

  return (
    <div className="Product">
      
      <img width="200px" src="https://sun9-34.userapi.com/impg/4giRvLUZoxmySD4SjPJdAeuvHKNx6VWITkco-w/7xr0hVMt3Eo.jpg?size=332x335&quality=96&sign=ea464ff20bf967d291b704e5196c61bd&type=album" alt='Изображение товара' />
      <h1>{product.title}</h1>
      <p>{product.price} рублей</p>
      <AddToBasketButton />

    </div>
  );
}

export default Product;