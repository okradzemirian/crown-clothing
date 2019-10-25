import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import { toggleCartHidden } from '../../redux/cart/cart-actions'
import { selectCartItems } from '../../redux/cart/cart-selectors'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'

import {
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer,
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <EmptyMessageContainer className='empty-message'>
                    Your cart is empty
                </EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CustomButton
            onClick={() => {
                dispatch(toggleCartHidden())
                history.push('/checkout')
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
