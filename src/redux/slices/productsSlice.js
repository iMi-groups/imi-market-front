import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeProduct: -1,
  items: [
    {
      id: 1,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 20,
      countByUser: 2,
    },
    {
      id: 2,
      image:
        "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F2%2FBabySpinach.jpg&w=2048&q=75",
      name: "Baby Spinach",
      price: 2,
    },
    {
      id: 3,
      image:
        "https://pickbazar-react.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F3%2Fblueberries.jpg&w=2048&q=75",
      name: "Blueberries",
      price: 2,
    },
    {
      id: 4,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 20,
      countByUser: 2,
    },
    {
      id: 5,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 20,
      countByUser: 2,
    },
    {
      id: 6,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 20,
      countByUser: 2,
    },
    {
      id: 7,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 20,
      countByUser: 2,
    },
    {
      id: 8,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 20,
      countByUser: 2,
    },
    {
      id: 9,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
    },
    {
      id: 10,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      countByUser: 12,
    },
    {
      id: 11,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      countByUser: 1,
    },
    {
      id: 12,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
    },
    {
      id: 13,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
    },
    {
      id: 14,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 20,
      countByUser: 2,
    },
    {
      id: 15,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 40,
      countByUser: 2,
    },
    {
      id: 16,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 20,
      countByUser: 2,
    },
    {
      id: 17,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      countByUser: 4,
    },
    {
      id: 18,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      countByUser: 2,
    },
    {
      id: 19,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
      discount: 20,
      countByUser: 2,
    },
    {
      id: 20,
      image:
        "https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1%2FApples.jpg&w=3840&q=75",
      name: "Apples",
      price: 2,
    },
  ]
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setActiveProduct: (state, action) => {
          state.activeProduct = action.payload
        },
        setProduct: (state, action) => {
            state.items = [...state.items, ...action.payload]
        },
    }
})

export const {
    setProduct,
    setActiveProduct
} = productsSlice.actions

export default productsSlice.reducer