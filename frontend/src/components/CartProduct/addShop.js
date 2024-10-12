import $api from "../../http"
export default async function addShop(productid, userid, color, store){
    if(!color){
        return store.setMsg(true, "Выберите цвет товара!", "error")
    }
    await $api.post("/api/v1.0/basket/add", {productid, userid, color}).then((response) => {
        store.setMsg(true, 'Товар был добавлен в корзину!', 'success');
    })
}