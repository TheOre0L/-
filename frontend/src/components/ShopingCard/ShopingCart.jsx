import React, { useState, useContext } from 'react';
import { Button, Modal } from 'flowbite-react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { IconButton, Checkbox, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InputMask from 'react-input-mask';
import $api, { API_URL } from '../../http';
import { Context } from "../../index";
import CDEKWidgetWithMap from '../OrderForm/CDEKWidget';
import CustomizedSnackbars from '../Message/notification_msg';
const ShoppingCart = () => {
    const { store } = useContext(Context);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [address, setAddress] = useState({address: "Не выбран", tariff: 0})

    // Toggle the cart modal and fetch cart items
    const toggleCartModal = async () => {
        setIsCartOpen(!isCartOpen);
        if (!isCartOpen) {
            try {
                const response = await $api.post("/api/v1.0/basket/get", { userid: store.user.id });
                setCartItems(response.data.basket);
            } catch (error) {
                console.error("Failed to load cart items:", error);
            }
        }
    };

    // Remove an item from the cart
    const handleRemoveItem = async (itemId) => {
        const response = await $api.post("/api/v1.0/basket/delete", { userid: store.user.id, id: itemId });
        setCartItems(response.data.basket);
        store.setMsg(true, 'Товар был удален из корзины!', 'warning');
    };


    const totalCost = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) || 0), 0);
    const totalAmount = address.address !== "Не выбран" ? totalCost + (parseFloat(address.tariff) || 0) : 0;
    return (
        <>
            {/* Cart Icon */}
            <ShoppingBasketIcon style={{ marginLeft: "2vw", cursor: "pointer" }} onClick={toggleCartModal} />
            {store.is_message ? <CustomizedSnackbars text={store.message} is_msg = {store.is_message} color={store.color_msg}/>: null}
            {/* Cart Modal */}
            <Modal show={isCartOpen} onClose={toggleCartModal} size="6xl">
                <Modal.Header>Корзина</Modal.Header>
                <Modal.Body>
                <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <form action="#" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <ol class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
    </ol>

    <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
      <div class="min-w-0 flex-1 space-y-8">
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Детали доставки</h2>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Фамилия Имя Отчество* </label>
              <input type="text" id="your_name" value={store.user.fio} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
            </div>

            <div>
              <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Электронная почта* </label>
              <input type="email" id="your_email" value={store.user.email} class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
            </div>

            <div>
            <div>
            <label htmlFor="phone-input" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Номер телефона*
            </label>
            <div className="flex items-center">
                <div className="relative w-full">
                    <InputMask
                        mask="+7 (999) 999-99-99"
                        alwaysShowMask={false}
                        className="z-20 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500"
                        placeholder="+7 (___) ___-__-__"
                        required
                    />
                </div>
            </div>
        </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
            <h4>Адрес доставки: {address.address}</h4>
          <div class="">
          <CDEKWidgetWithMap setAddress={setAddress}/>
          </div>
        </div>

        <div>
          <label for="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Введите промокод </label>
          <div class="flex max-w-md items-center gap-4">
            <input type="text" id="voucher" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="" required />
            <button type="button" class="flex items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Применить</button>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
  <div className="flow-root">
    <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="cart-item bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
          >
            <dl className="flex items-center justify-between gap-4 w-full">
              <div className="flex flex-col">
                <dt className="text-lg font-semibold text-gray-700 dark:text-gray-300">{item.title}</dt>
                <dt className="text-lg font-semibold text-gray-700 dark:text-gray-300">Цвет: {item.color}</dt>
                <dd className="text-xl font-bold text-gray-900 dark:text-white">{item.price} руб.</dd>
              </div>
              <div>
                <IconButton
                  className="editButtons bg-red-500 p-2 rounded-full hover:bg-red-600 transition duration-200"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </dl>
                                    </div>
                                    
                        ))
                    ) : (
                        <p>Ваша корзина пуста.</p>
                    )}

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-bold text-gray-900 dark:text-white">Итого (товары + доставка)</dt>
              <dd class="text-base font-bold text-gray-900 dark:text-white">{totalAmount} руб.</dd>
            </dl>
          </div>
        </div>

        <div class="space-y-3">
          <button type="submit" disabled={cartItems.length === 0 ? true : false} class="disabled:  flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Перейти к оплате</button>

          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Нажимая кнопку оплатить вы соглашаетесь с <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Соглашением</a>.</p>
        </div>
      </div>
    </div>
  </form>
</section>
                    
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ShoppingCart;