import React from 'react'

import {Card, CardContent, CardTitle } from "./ui/card";
interface BlogCardProps {
  post: {id: string; title: string; description: string; date: string; imageUrl: string };
  isDarkBackground: boolean;
}


export default function BlogCard( { post, isDarkBackground}: BlogCardProps) {
  return (
<Card className= {`p-4 ${isDarkBackground ? 'bg-purple-500 text-black' : ' bg-yellow-400 text-white'} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}>

    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-full h-48 object-cover rounded-t-lg"
      />
<CardTitle className='text-xl font-normal mt-4 text-center'> {post.title}</CardTitle>
<br />
<CardContent className="text-center">
  <p> {post.description}</p> 
</CardContent>
<div className="flex flex-col items-center mt-4">
  <p 
    className={`text-sm mb-2 ${
    isDarkBackground ? "text-amber-800" : "text-green-700" 
    }`}
> 
    Published on: {new Date(post.date).toLocaleDateString()}
    </p>
    
<a
href={`/posts/${post.id}`}
className={`w-full px-6 text-white bg-blue-300 hover:bg-slate-800 rounded hover:bg- ${
  isDarkBackground 
  ? "bg-black hover:lg-red-500" : "bg-black hover:bg-slate-800"
  }`}
  >
  Read More
</a>
  </div>

</Card>
  );
}