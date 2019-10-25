import React from 'react'
import { withRouter } from 'react-router-dom'

import {
    MenuItemContainer,
    BackgroundImage,
    ContentContainer,
    TitleContainer,
    SubtitleContainer,
} from './menu-item.styles'

const MenuItem = ({ linkUrl, title, imageUrl, size, history, match }) => (
    <MenuItemContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImage imageUrl={imageUrl} />

        <ContentContainer>
            <TitleContainer>{title}</TitleContainer>
            <SubtitleContainer>Shop Now</SubtitleContainer>
        </ContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem)
