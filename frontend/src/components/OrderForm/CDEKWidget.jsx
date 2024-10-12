import React, { useEffect, useRef } from 'react';
import "@cdek-it/widget"
import { API_URL } from '../../http';
const CDEKWidgetWithMap = ({setAddress}) => {
  const widget = useRef()

  useEffect(() => {
    // 2. Помещаем конструктор в current. Настраиваем конфигурацию
    widget.current = new window.CDEKWidget({

      defaultLocation: 'Москва',
      from: {
        // Код страны населенного пункта отправителя в формате ISO_3166-1_alpha-2
        country_code: 'RU',
        // Название населенного пункта отправителя
        city: 'Невинномысск',
        // Почтовый индекс населенного пункта отправителя
        postal_code: 357108,
        // Код населенного пункта CDEK
        code: 1079,
        // Адрес откуда произойдет отправка курьером в населеном пункте
        address: 'ул. Краснопартизанская, д. 5',
      },
      apiKey: '9aa1379b-a4de-4be0-892e-31602ef63eeb',

      // Управление кнопкой «Выбрать» в описании ПВЗ. Если выставлено в false – кнопка не будет отображаться,
      // что подходит для инфовиджета в разделе «Доставка». Если true – кнопка показывается с возможностью
      // подписаться на выбор ПВЗ с помощью события onChoose
      canChoose: true,

      // Путь к php файлу для расчетов виджета. Берем отсюда https://github.com/cdek-it/widget/blob/main/dist/service.php?plain=1
      // Настройка тут: https://github.com/cdek-it/widget/wiki/%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-3.0
      servicePath: `${API_URL}/service/`,

      popup: true,

      // Функция, вызываемая после окончания загрузки виджета
      onReady() {
        console.log('Widget is ready')
      },

      goods: [
        {
            length: 10,
            width: 10,
            height: 10,
            weight: 1,
        }],
    onCalculate(tariffs, address) {
        console.log('Подсчитаны тарифы', tariffs);
        console.log('Адрес подсчета', address);
    },
      // Функция, вызываемая после выбора клиентом тарифа и точки доставки.
      // Событие передает в функцию-обработчик три параметра: выбранный режим доставки, выбранный тариф и выбранный адрес.
      onChoose(delivery, rate, address) {
        setAddress({address: `${address.city} ${address.address}`, tariff: rate.delivery_sum})
      }
    });
  }, []);

  return (
    <div className={'widget-container'}>
      {/*3. Ставим открытие popup-окна на клик по кнопке*/}
      <button type="button" onClick={() => widget.current.open()} class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Куда доставить?</button>
    </div>
  )
};

export default CDEKWidgetWithMap;