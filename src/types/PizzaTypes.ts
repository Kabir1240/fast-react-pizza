interface CartPizza {
  pizzaId: number,
  name: string,
  quantity: number,
  unitPrice: number,
  totalPrice: number,
}

interface MenuPizza {
  "id": number,
  "name": string,
  "unitPrice": number,
  "imageUrl": string,
  "ingredients": string[],
  "soldOut": boolean,
}

export type { CartPizza, MenuPizza }
