import React from 'react'

import {
    CartItemContainer,
    ItemDetailsContainer,
    NameContainer,
} from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <img src={imageUrl} alt={name} />
        <ItemDetailsContainer>
            <NameContainer>{name}</NameContainer>
            <span>
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem
