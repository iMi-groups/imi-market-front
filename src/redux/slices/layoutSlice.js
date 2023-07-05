import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    activeCategory: 1,
    cartIsOpen: false,
    sideBarIsOpen: false,
    menuMobileIsOpen: false,
    searchIsOpen: false,
    productModalIsOpen: false,
}

export const layoutSclice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        openCart: (state) => {
            state.cartIsOpen = true
        },
        closeCart: (state) => {
            state.cartIsOpen = false
        },
        openSideBar: (state) => {
            state.sideBarIsOpen = true
        },
        closeSideBar: (state) => {
            state.sideBarIsOpen = false
        },
        openSearch: (state) => {
            state.searchIsOpen = true
        },
        closeSearch: (state) => {
            state.searchIsOpen = false
        },
        openMenuMobile: (state) => {
            state.menuMobileIsOpen = true
        },
        closeMenuMobile: (state) => {
            state.menuMobileIsOpen = false
        },
        openProductModal: (state) => {
            state.productModalIsOpen = true
        },
        closeProductModal: (state) => {
            state.productModalIsOpen = false
        }
    }
})

export const {
    setActiveCategory,
    openCart,
    closeCart,
    openSideBar,
    closeSideBar,
    openSearch,
    closeSearch,
    openMenuMobile,
    closeMenuMobile,
    openProductModal,
    closeProductModal
} = layoutSclice.actions

export default layoutSclice.reducer