import React, { useState } from 'react';
import axios from 'axios';
import CDEKWidgetWithMap from './CDEKWidget';

const OrderForm = () => {
  const [orderData, setOrderData] = useState({
    recipientName: '',
    recipientPhone: '',
    fromLocation: '',
    toLocation: '',
    weight: '',
    length: '',
    width: '',
    height: ''
  });

  const [deliveryCost, setDeliveryCost] = useState({total_sum: 0});
  const [orderResponse, setOrderResponse] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };

  const handleDeliveryCost = async () => {
    try {
      const response = await axios.post('http://localhost:3000/delivery-cost', {
        tariff_code: 1,  // Например, тариф стандартной доставки
        from_location: { code: orderData.fromLocation },
        to_location: { code: orderData.toLocation },
        packages: [
          {
            weight: parseInt(orderData.weight),
            length: parseInt(orderData.length),
            width: parseInt(orderData.width),
            height: parseInt(orderData.height),
          },
        ],
      });
      setDeliveryCost(response.data);
    } catch (err) {
      setError("Ошибка расчета стоимости доставки");
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/order', {
        orderData: {
          number: 'test_order_123',
          tariff_code: 1, // Стандартный тариф CDEK
          from_location: { code: orderData.fromLocation },
          to_location: { code: orderData.toLocation },
          recipient: {
            name: orderData.recipientName,
            phones: [{ number: orderData.recipientPhone }],
          },
          packages: [
            {
              number: '1',
              weight: parseInt(orderData.weight),
              length: parseInt(orderData.length),
              width: parseInt(orderData.width),
              height: parseInt(orderData.height),
            },
          ],
        },
      });
      setOrderResponse(response.data);
    } catch (err) {
      setError('Ошибка оформления заказа');
    }
  };

  return (
    <div>
      <h1>Оформление заказа через CDEK</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Имя получателя:</label>
          <input
            type="text"
            name="recipientName"
            value={orderData.recipientName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Телефон получателя:</label>
          <input
            type="tel"
            name="recipientPhone"
            value={orderData.recipientPhone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Место отправки (код города):</label>
          <input
            type="text"
            name="fromLocation"
            value={orderData.fromLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Место назначения (код города):</label>
            <CDEKWidgetWithMap setAddress={null}/>
        </div>
        <div>
          <label>Вес (в граммах):</label>
          <input
            type="number"
            name="weight"
            value={orderData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Длина (см):</label>
          <input
            type="number"
            name="length"
            value={orderData.length}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ширина (см):</label>
          <input
            type="number"
            name="width"
            value={orderData.width}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Высота (см):</label>
          <input
            type="number"
            name="height"
            value={orderData.height}
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={handleDeliveryCost}>
          Рассчитать стоимость доставки
        </button>
        <button type="submit">Оформить заказ</button>
      </form>

      {deliveryCost && (
        <div>
          <h3>Стоимость доставки: {deliveryCost.total_sum} RUB</h3>
        </div>
      )}

      {orderResponse && (
        <div>
          <h3>Заказ успешно оформлен!</h3>
          <pre>{JSON.stringify(orderResponse, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ color: 'red' }}>
          <h3>{error}</h3>
        </div>
      )}
    </div>
  );
};

export default OrderForm;