import crypto from '../Videos/crypto.mp4'
import video from '../Videos/video.mp4'
import ecommerce from '../Videos/ecommerce.mp4'
import cart from '../Videos/cart.mp4'
import goals from '../Videos/goals.mp4'
import netflix from '../Videos/netflix.mp4'

const details = [
    {
        Title: 'Crypto-App',
        Description: 'A cryptocurrency price tracking application that displays real-time price information for various cryptocurrencies.',
        url: 'https://crypto-app-two-xi.vercel.app/',
        vid: crypto
    },

    {
        Title: 'Video-Hub',
        Description: 'A video sharing web application that allows users to upload and view videos, as well as create profiles and leave comments on videos.',
        url: 'https://video-hub-three.vercel.app/',
        vid: video
    },

    {
        Title: 'E-Commerce',
        Description: 'An e-commerce web application that allows users to browse and purchase various products, including clothing, accessories, and home goods.',
        url: 'https://e-commerce-two-hazel.vercel.app/',
        vid: ecommerce
    },

    {
        Title: 'React-Cart',
        Description: 'A simple shopping cart web application built using React that allows users to browse and add items to their cart, as well as update quantities and remove items',
        url: 'https://react-cart-fawn.vercel.app/',
        vid: cart
    },

    {
        Title: 'Daily-Goals',
        Description: 'A web application for setting and tracking daily goals, which allows users to create daily goals and mark them as complete once they have been achieved.',
        url: 'https://daily-goals-gamma.vercel.app/',
        vid: goals
    },

    {
        Title: 'Netflix',
        Description: 'A web application that replicates the user interface of the Netflix streaming platform, allowing users to browse and search for movies and TV shows, as well as view trailers and add titles to their watchlist.',
        url: 'https://netflix-clown.vercel.app/',
        vid: netflix
    },
];

export default details;