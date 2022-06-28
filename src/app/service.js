import { url } from "../constants/constants"

export const changeNumberOfProductInCart = async (user, itemId, setLoading, count) => {
  setLoading(true)

  const item = await fetch(`${url}/user/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${JSON.parse(user)}`
    },
    body: JSON.stringify({
      productId: itemId,
      itemCount: count
    })
  }).then(data=>data.json())
  setLoading(false)
  return item.itemCount
}
