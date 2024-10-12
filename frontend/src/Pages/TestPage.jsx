import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { hot } from "react-hot-loader/root";
import { useParams } from "react-router-dom";
import { $api, API_URL } from "../http";
import OrderForm from "../components/OrderForm/OrderForm"
import { Context } from "../index";
import CDEKWidgetWithMap from "../components/OrderForm/CDEKWidget";


const TestPage = observer(() => {
    const {store} = useContext(Context);
    const {id} = useParams();
    const [cartItems, setCartItems] = useState([]);
  return (
    <>
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
              <input type="text" id="your_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bonnie Green" required />
            </div>

            <div>
              <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Электронная почта* </label>
              <input type="email" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="name@flowbite.com" required />
            </div>

            <div>
              <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Номер телефона* </label>
              <div class="flex items-center">
                <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
                  <svg fill="none" aria-hidden="true" class="me-2 h-4 w-4" viewBox="0 0 20 15">
                    <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                    <mask id="a"  style={{maskType: "luminance"}} width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                    </mask>
                    <g mask="url(#a)">
                      <path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" />
                      <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                      <g filter="url(#filter0_d_343_121520)">
                        <path
                          fill="url(#paint0_linear_343_121520)"
                          fill-rule="evenodd"
                          d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                          clip-rule="evenodd"
                        />
                      </g>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#fff" />
                        <stop offset="1" stop-color="#F0F0F0" />
                      </linearGradient>
                      <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="1" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                        <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                  +1
                  <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                  </svg>
                </button>
                <div id="dropdown-phone-3" class="z-10 hidden w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700">
                  <ul class="p-2 text-sm font-medium text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-phone-button-2">
                    <li>
                      <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <span class="inline-flex items-center">
                          <svg fill="none" aria-hidden="true" class="me-2 h-4 w-4" viewBox="0 0 20 15">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                            <mask id="a"  style={{maskType: "luminance"}} width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                            </mask>
                            <g mask="url(#a)">
                              <path fill="#D02F44" fill-rule="evenodd" d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z" clip-rule="evenodd" />
                              <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                              <g filter="url(#filter0_d_343_121520)">
                                <path
                                  fill="url(#paint0_linear_343_121520)"
                                  fill-rule="evenodd"
                                  d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                                  clip-rule="evenodd"
                                />
                              </g>
                            </g>
                            <defs>
                              <linearGradient id="paint0_linear_343_121520" x1=".933" x2=".933" y1="1.433" y2="6.1" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#fff" />
                                <stop offset="1" stop-color="#F0F0F0" />
                              </linearGradient>
                              <filter id="filter0_d_343_121520" width="6.533" height="5.667" x=".933" y="1.433" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset dy="1" />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_343_121520" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_343_121520" result="shape" />
                              </filter>
                            </defs>
                          </svg>
                          United States (+7)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <span class="inline-flex items-center">
                          <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                            <mask id="a" style={{maskType: "luminance"}} width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                            </mask>
                            <g mask="url(#a)">
                              <path fill="#0A17A7" d="M0 .5h19.6v14H0z" />
                              <path fill="#fff" stroke="#fff" stroke-width=".667" d="M0 .167h-.901l.684.586 3.15 2.7v.609L-.194 6.295l-.14.1v1.24l.51-.319L3.83 5.033h.73L7.7 7.276a.488.488 0 00.601-.767L5.467 4.08v-.608l2.987-2.134a.667.667 0 00.28-.543V-.1l-.51.318L4.57 2.5h-.73L.66.229.572.167H0z" />
                              <path fill="url(#paint0_linear_374_135177)" fill-rule="evenodd" d="M0 2.833V4.7h3.267v2.133c0 .369.298.667.666.667h.534a.667.667 0 00.666-.667V4.7H8.2a.667.667 0 00.667-.667V3.5a.667.667 0 00-.667-.667H5.133V.5H3.267v2.333H0z" clip-rule="evenodd" />
                              <path fill="url(#paint1_linear_374_135177)" fill-rule="evenodd" d="M0 3.3h3.733V.5h.934v2.8H8.4v.933H4.667v2.8h-.934v-2.8H0V3.3z" clip-rule="evenodd" />
                              <path
                                fill="#fff"
                                fill-rule="evenodd"
                                d="M4.2 11.933l-.823.433.157-.916-.666-.65.92-.133.412-.834.411.834.92.134-.665.649.157.916-.823-.433zm9.8.7l-.66.194.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.194zm0-8.866l-.66.193.194-.66-.194-.66.66.193.66-.193-.193.66.193.66-.66-.193zm2.8 2.8l-.66.193.193-.66-.193-.66.66.193.66-.193-.193.66.193.66-.66-.193zm-5.6.933l-.66.193.193-.66-.193-.66.66.194.66-.194-.193.66.193.66-.66-.193zm4.2 1.167l-.33.096.096-.33-.096-.33.33.097.33-.097-.097.33.097.33-.33-.096z"
                                clip-rule="evenodd"
                              />
                            </g>
                            <defs>
                              <linearGradient id="paint0_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#fff" />
                                <stop offset="1" stop-color="#F0F0F0" />
                              </linearGradient>
                              <linearGradient id="paint1_linear_374_135177" x1="0" x2="0" y1=".5" y2="7.033" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF2E3B" />
                                <stop offset="1" stop-color="#FC0D1B" />
                              </linearGradient>
                            </defs>
                          </svg>
                          Australia (+3)
                        </span>
                      </button>
                    </li>
                    <li>
                      <button type="button" class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                        <span class="inline-flex items-center">
                          <svg class="me-2 h-4 w-4" fill="none" viewBox="0 0 20 15">
                            <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                            <mask id="a"  style={{maskType: "luminance"}} width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse">
                              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                            </mask>
                            <g mask="url(#a)">
                              <path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd" />
                              <g filter="url(#filter0_d_374_135180)">
                                <path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd" />
                              </g>
                              <g filter="url(#filter1_d_374_135180)">
                                <path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd" />
                              </g>
                            </g>
                            <defs>
                              <filter id="filter0_d_374_135180" width="19.6" height="4.667" x="0" y="5.167" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                              </filter>
                              <filter id="filter1_d_374_135180" width="19.6" height="4.667" x="0" y="9.833" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                <feOffset />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_374_135180" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_374_135180" result="shape" />
                              </filter>
                            </defs>
                          </svg>
                          Germany (+3)
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div class="relative w-full">
                  <input type="text" id="phone-input" class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700  dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" required />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div class="">
          <CDEKWidgetWithMap/>
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

      <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
        <div class="flow-root">
          <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">$8,094.00</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
              <dd class="text-base font-medium text-green-500">0</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
              <dd class="text-base font-medium text-gray-900 dark:text-white">$199</dd>
            </dl>

            <dl class="flex items-center justify-between gap-4 py-3">
              <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd class="text-base font-bold text-gray-900 dark:text-white">$8,392.00</dd>
            </dl>
          </div>
        </div>

        <div class="space-y-3">
          <button type="submit" class="flex w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Перейти к оплате</button>

          <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Нажимая кнопку оплатить вы соглашаетесь с <a href="#" title="" class="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Соглашением</a>.</p>
        </div>
      </div>
    </div>
  </form>
</section>
    </>
  );
});
export default hot(TestPage);
