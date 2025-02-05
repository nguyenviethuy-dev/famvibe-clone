import { useState } from "react"
import { ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import FilterSidebar from "@/components/fillter-sitebar/fillter-sitebar"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating?: number
  image: string
  image1?: string
  salePercent?: number
  colors?: string[]
}

const products: Product[] = [
    {
        id: 1,
        name: "Personalized Just A Girl Who Loves Her Dogs",
        price: 24.99,
        rating: 5,
        colors: ["black", "white", "navy", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 2,
        name: "Personalized Dog Mom Half Leopard",
        price: 24.99,
        rating: 4,
        colors: ["black", "white", "navy", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 3,
        name: "Personalized Gift This Mom Runs On Caffeine",
        price: 24.99,
        rating: 4,
        colors: ["black", "white", "navy", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 4,
        name: "Personalized Gift For Grandson On Their Birthday",
        price: 19.99,
        rating: 4,
        colors: ["black", "white", "navy", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 5,
        name: "Personalized Family Crossword Art Print",
        price: 24.99,
        rating: 3,
        colors: ["black", "white", "navy", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 6,
        name: "Personalized Baby 1st Christmas Custom",
        price: 12.99,
        rating: 4,
        colors: ["black", "white", "navy", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 7,
        name: "Custom Family Name Wall Art",
        price: 29.99,
        rating: 4,
        colors: ["black", "white", "navy", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 8,
        name: "Personalized Christmas Ornament",
        price: 15.99,
        rating: 4,
        colors: ["black", "white", "navy", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 9,
        name: "Personalized Christmas Ornament",
        price: 15.99,
        rating: 4,
        colors: ["black", "white", "navy", "pink", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 10,
        name: "Personalized Christmas Ornament",
        price: 15.99,
        rating: 4,
        colors: ["black", "white", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 11,
        name: "Personalized Christmas Ornament",
        price: 15.99,
        rating: 4,
        colors: ["black", "white", "navy", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 12,
        name: "Personalized Christmas Ornament",
        price: 15.99,
        rating: 4,
        colors: ["black", "white", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 13,
        name: "Personalized Christmas Ornament",
        price: 15.99,
        rating: 4,
        colors: ["black", "white", "navy", "pink", "purple"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 14,
        name: "Personalized Christmas Ornament",
        price: 15.99,
        rating: 4,
        colors: ["white", "navy", "pink", "purple", "lightblue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 15,
        name: "Personalized Gift Valentine's Day You Are My Favorite Thing To Do Pillow 37624",
        price: 29.99,
        rating: 4.5,
        colors: ["black", "grey", "navy", "pink"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 16,
        name: "Superhero Action Figure",
        price: 19.99,
        rating: 5,
        colors: ["red", "blue", "yellow"],
         image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 17,
        name: "Funky Graphic Tee",
        price: 24.99,
        rating: 4,
        colors: ["black", "green", "white"],
         image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 18,
        name: "Cosmic Galaxy Joggers",
        price: 34.99,
        rating: 5,
        colors: ["black", "blue", "purple"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 19,
        name: "Interactive Dinosaur Toy",
        price: 22.99,
        rating: 4.5,
        colors: ["green", "red", "blue"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 20,
        name: "Animal Print Sweatshirt",
        price: 32.99,
        rating: 5,
        colors: ["brown", "beige", "black"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 21,
        name: "Leather Strapped Watch",
        price: 39.99,
        rating: 4.5,
        colors: ["black", "brown", "silver"],
        image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 22,
        name: "Boho Chic Beach Hat",
        price: 27.99,
        rating: 4,
        colors: ["white", "beige", "black"],
         image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 23,
        name: "Summer Beach Shorts",
        price: 19.99,
        rating: 4.5,
        colors: ["blue", "yellow", "red"],
         image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 24,
        name: "Sporty Backpack",
        price: 29.99,
        rating: 4.5,
        colors: ["black", "grey", "red"],
         image: "https://cdn.shopify.com/s/files/1/0402/7852/4065/files/37625-290013-mockup-2.jpg?v=1736845956&width=700",
        image1: "https://assets-v2.customall.io/3c652c223e657d650c3e36230b092d3d2018182673712225717e736a7e7377236a73217e776a7f2370236a772423752622707271772275692d3720656b65302e23332f657d767777776b6532292e33657d65373f656b6530222537657d333532226b6533352e2a657d65653a.png"
    },
    {
        id: 25,
        name: "Cotton Sweatpants",
        price: 24.99,
        rating: 5,
        colors: ["grey", "black", "navy"],
        image: "https://images.unsplash.com/photo-1531648963354-1fd7727208b8?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8Nnx8c3BvcnR5fGVufDB8fHx8fDE2NzcwMzI4NzI&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 26,
        name: "Kids' Building Blocks Set",
        price: 18.99,
        rating: 4,
        colors: ["multicolor"],
        image: "https://images.unsplash.com/photo-1571171637578-3e6c1a38bfa8?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8Mnx8a2lkcyUyMGJ1aWxkaW5nJTIwYmxvY2t8ZW58MHx8fHx8fDE2NzcwMzI5MDg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 27,
        name: "Stylish Sunglasses",
        price: 14.99,
        rating: 5,
        colors: ["black", "silver", "gold"],
        image: "https://images.unsplash.com/photo-1586227384849-2a60cf8613a6?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8OHx8c3VuZ2xhcyUyMGFjY2Vzc29yaWVzfGVufDB8fHx8fDE2NzcwMzMwMTg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 28,
        name: "Leather Boots",
        price: 39.99,
        rating: 4,
        colors: ["brown", "black", "tan"],
        image: "https://images.unsplash.com/photo-1565030369-01e1208d0466?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8Nnx8bGVhdGhlciUyMGJvb3R8ZW58MHx8fHx8fDE2NzcwMzMwNzg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 29,
        name: "Funny T-Shirt",
        price: 19.99,
        rating: 4.5,
        colors: ["black", "white", "yellow"],
        image: "https://images.unsplash.com/photo-1565297964-734de8cb4588?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8Mnx8dGlyc2hYdGVlJTIwbWVzc2FnbWVudHxlbnwwfHx8fDE2NzcwMzMwNzY&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 30,
        name: "Travel Duffel Bag",
        price: 34.99,
        rating: 4.5,
        colors: ["grey", "blue", "black"],
        image: "https://images.unsplash.com/photo-1607015666920-3d3949aeb195?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8MXx8dHJhdmVsJTIwY3VwJTIwYmFnfGVufDB8fHx8fDE2NzcwMzMwODk&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 31,
        name: "Winter Jacket",
        price: 39.99,
        rating: 5,
        colors: ["blue", "grey", "black"],
        image: "https://images.unsplash.com/photo-1570379829715-529a09c925f7?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8Mnx8Y2Fwa3xlbnwwfHx8fDE2NzcwMzI2OTg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 32,
        name: "Elegant Earrings",
        price: 22.99,
        rating: 4.5,
        colors: ["gold", "silver", "rose gold"],
        image: "https://images.unsplash.com/photo-1612693725689-4d742ee703f6?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8Nnx8ZWFycnl8ZW58MHx8fHx8fDE2NzcwMzMwMjY&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 33,
        name: "Yoga Mat",
        price: 25.99,
        rating: 5,
        colors: ["blue", "green", "purple"],
        image: "https://images.unsplash.com/photo-1587302680749-9679b93f5e77?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8NXx8Y29sb3JmdWxhe3xuZW1oZGVsdG8lMkF3YXklMjBFcmlkZW54fGVufDB8fHx8fDE2NzcwMzMwMzY&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 34,
        name: "Classic Denim Jacket",
        price: 32.99,
        rating: 4.5,
        colors: ["blue", "black", "grey"],
        image: "https://images.unsplash.com/photo-1563272737-e9f978cb0c42?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8fHx8fDE2NzcwMzMwNzc&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 35,
        name: "Casual Sneakers",
        price: 28.99,
        rating: 4,
        colors: ["white", "black", "red"],
        image: "https://images.unsplash.com/photo-1568032864-22f0276f7788?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8Mnx8Y2FzdWFsJTIwZGVuaW1lbnx8ZW58MHx8fHx8fDE2NzcwMzMwNzE&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 36,
        name: "Fashion Sunglasses",
        price: 23.99,
        rating: 4.5,
        colors: ["black", "blue", "grey"],
        image: "https://images.unsplash.com/photo-1595772318595-45358515d1fc?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg0OXwwfDF8c2VhY2h8Mnx8ZnVubnklMjBzdW5nbGFzc2VzfGVufDB8fHx8fDE2NzcwMzMwNzg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
        id: 37,
        name: "Wooden Toy Train",
        price: 20.99,
        rating: 5,
        colors: ["brown", "red", "green"],
        image: "https://i.etsystatic.com/23407641/r/il/8b9e8d/3932516459/il_1080xN.3932516459_mi8t.jpg",
    },
    {
        id: 38,
        name: "Baby Rattle Toy",
        price: 18.99,
        rating: 4,
        colors: ["yellow", "blue", "pink"],
        image: "https://www.people-kk.co.jp/global-image/units/img/22901-11-20201015173449_b5f8809a9710e4.jpg",
    },
    {
        id: 39,
        name: "Vintage Camera",
        price: 34.99,
        rating: 5,
        colors: ["black", "silver"],
        image: "https://cute.camera/cdn/shop/products/canon-ae-1-35mm-film-camera-533547-sw.jpg?v=1694176356",
    },
    {
        id: 40,
        name: "Luxury Watch",
        price: 39.99,
        rating: 4.5,
        colors: ["gold", "silver", "black"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRMRqKcQwZ0z37dIpTgVeRNaC6JlcJrVFSg&s",
    }
    // Add more products as needed
];




export default function ProductPage() {
    const [sortBy, setSortBy] = useState("trending")
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 12  // Sửa giá trị này từ 5 thành 12
  
    // Tính toán chỉ mục của các sản phẩm cần hiển thị trên trang hiện tại
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
  
    // Tính toán tổng số trang
    const totalPages = Math.ceil(products.length / productsPerPage)
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-72">
            <FilterSidebar />
          </div>
  
          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg">{products.length} products</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 group">
                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <img
                    src={product.image1}
                    alt={`${product.name} hover image`}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
                <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                {product.rating && (
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < (product.rating ?? 0) ? "fill-primary" : "fill-muted stroke-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.salePercent && <span className="text-sm text-red-500">Sale {product.salePercent}%</span>}
                </div>
              </div>
              
              ))}
            </div>
  
            <div className="flex justify-center items-center gap-2 mt-8">
              {/* Nút phân trang */}
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  className="w-10 h-10 p-0"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                className="w-10 h-10 p-0"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              >
                <ChevronDown className="rotate-270" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }