import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=1200&q=75",
    },
    {
    id: 2,
    img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F903%2Foffer-4.png&w=640&q=75",
    },
    {
    id: 3,
    img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75",
    },
    {
    id: 4,
    img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F905%2Foffer-2.png&w=640&q=75",
    },
    {
    id: 5,
    img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F906%2Foffer-1.png&w=640&q=75",
    },
    {
    id: 6,
    img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=1200&q=75",
    },
    {
    id: 7,
    img: "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F902%2Foffer-5.png&w=1200&q=75",
    },
]

export const bannersSlice = createSlice({
    name: 'banners',
    initialState,
    reducers: {
        setBanners: (state, action) => {
            state = [...state, ...action.payload]
        }
    }
})

export const {
    setBanners
} = bannersSlice.actions

export default bannersSlice.reducer