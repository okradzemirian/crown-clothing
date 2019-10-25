import React from 'react'
import { connect } from 'react-redux'

import { clearItem, removeItem, addItem } from '../../redux/cart/cart-actions'
import {
    CheckoutItemContainer,
    ImageContainer,
    QuantityContainer,
    ValueContainer,
    ArrowContainer,
    RemoveButtonContainer,
    PriceContainer,
    NameContainer,
} from './checkout-item.styles'

const CheckoutItem = ({ clearItem, addItem, removeItem, cartItem }) => {
    const { imageUrl, price, name, quantity } = cartItem

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item' />
            </ImageContainer>

            <NameContainer>{name}</NameContainer>

            <QuantityContainer>
                <ArrowContainer onClick={() => removeItem(cartItem)}>
                    &#10094;
                </ArrowContainer>
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer onClick={() => addItem(cartItem)}>
                    &#10095;
                </ArrowContainer>
            </QuantityContainer>

            <PriceContainer>${price}</PriceContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
})

export default connect(
    null,
    mapDispatchToProps,
)(CheckoutItem)
