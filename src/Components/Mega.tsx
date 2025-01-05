import React from 'react';
import BlogCard from '../Components/BlogCard';

export default function Mega() {
  const post = [
    {
      id: '1',
      title: "Treasure Hunt",
      description: "A fun adventure where you search for hidden treasures and solve clues",
      date: "2024-11-2",
      imageUrl: "/pic1.jpg",
    },
    {
      id: '2',
      title: "Arts and Crafts",
      description: "Create colorful art and cool crafts using your imagination and different materials",
      date: "2024-11-2",
      imageUrl: "/pic10.webp",
    },
    {
      id: '3',
      title: "Science Experiments",
      description: "Explore how the world works by doing fun and easy science experiments",
      date: "2024-11-28",
      imageUrl: "/pic2.jpg",
    },
    {
      id: '4',
      title: "Cooking or Baking",
      description: "Learn how to make delicious food and tasty treats in the kitchen",
      date: "2024-9-21",
      imageUrl: "/pic3.jpg",
    },
    {
      id: '5',
      title: "Music or Dance",
      description: "Have fun singing, playing instruments, or dancing to your favorite tunes",
      date: "2024-11-28",
      imageUrl: "/pic8.webp",
    },
    {
      id: '6',
      title: "Story Time",
      description: "Enjoy listening to exciting stories that take you to magical places",
      date: "2024-11-28",
      imageUrl: "/pic5.jpg",
    },
    {
      id: '7',
      title: "Yoga or Movement",
      description: "Stretch, relax, and move your body in fun ways to feel good",
      date: "2024-11-28",
      imageUrl: "/pic6.avif",
    },
    {
      id: '8',
      title: "Outdoor Games",
      description: "Their black and white stripes are unique and are as distinctive as human fingerprints",
      date: "2024-11-28",
      imageUrl: "/pic7.jpg",
    },
    {
      id: '9',
      title: "Pet Care",
      description: "Learn how to take care of animals by feeding them, cleaning, and playing with them",
      date: "2024-11-28",
      imageUrl: "/pic9.webp",
    },
  ];

  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-amber-700 animate-color-change">
        Here are different activity ideas for kids
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {post.map((singlePost, index) => (
          <div className="fade-in" key={singlePost.id}>
            <div className="blog-card">
              <BlogCard post={singlePost} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
