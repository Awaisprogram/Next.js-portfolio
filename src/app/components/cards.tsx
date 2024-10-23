import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Define the Post interface
interface Post {
    image: string| StaticImageData;
    name: string; 
    description: string;  
    url: string; 
}


interface CardsProps {
    post: Post; 
}

const Cards: React.FC<CardsProps> = ({ post }) => {
    return (
        <div className='pt-10 flex flex-grow-1'>
            <div className="max-w-sm rounded overflow-hidden rounded-lg shadow-lg mt-5 bg-gradient-to-r from-gray-900 to-gray-500">
                <Image className="w-full p-3 border-solid rounded-xl h-48 object-cover" src={post.image} alt={post.name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2 border-b-2 text-white">{post.name}</div>
                    <p className="text-gray-100 text-base">{post.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <a href={post.url} className="text-white hover:text-gray-100 font-semibold">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Cards;
