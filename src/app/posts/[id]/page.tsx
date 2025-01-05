import AuthorCard from '@/Components/AuthorCard';
import React from 'react';

const posts = [
  { id : "1",
    title : "Treasure Hunt",
    description: "A Treasure Hunt is a perfect example of a fun, educational game that allows kids to use their problem-solving skills, critical thinking, and teamwork abilities. As children search for hidden items based on clues, they improve their ability to follow instructions and enhance their spatial awareness. This activity encourages curiosity, exploration, and active learning, which stimulates a child’s cognitive development. Additionally, treasure hunts promote physical activity, which is beneficial for a child’s overall health and fitness. ",
    date:"2024-11-2",
    image :"/pic1.jpg",

  },
  {
    id : "2",
    title : "Arts and Crafts",
    description: "Arts and Crafts are incredibly important for fostering a childs creativity and imagination. Activities like painting, drawing, building, and sculpting help children express their emotions and ideas in ways that words cannot. These creative activities enhance fine motor skills, hand-eye coordination, and problem-solving abilities. They also allow children to develop patience, as they often have to work on projects for a longer period of time, encouraging focus and concentration. Furthermore, crafting helps children learn about colors, shapes, and textures, which are key elements of their visual development.",
    date:"2024-11-2",
    image :"/pic10.webp",

  },
  {
    id : "3",
    title : "Science Experiments",
    description: "Science Experiments ignite a childs curiosity about the world around them. Whether its creating simple chemical reactions or observing how plants grow, science experiments provide children with hands-on learning experiences that allow them to explore the natural world. These activities foster scientific thinking, teaching kids how to hypothesize, test, and observe results. They also promote critical thinking and problem-solving skills. By introducing children to the world of science, we can help them develop an interest in subjects like physics, biology, and chemistry from an early age, laying the foundation for a future in scientific fields.",
    date:"2024-11-28",
    image :"/pic2.jpg",

  },
  {
    id : "4",
    title : "Cooking or Baking",
    description: "Cooking or Baking is a wonderful activity that teaches children practical life skills. As they follow recipes, they learn how to measure ingredients, read instructions, and practice patience. This type of hands-on activity encourages math skills (e.g., measuring, fractions) and the concept of time (waiting for things to cook or bake). Cooking also teaches children about nutrition, helping them make healthier food choices and learn the value of eating a balanced diet. Additionally, completing a meal or baked good gives kids a sense of accomplishment and boosts their self-esteem.",
    date:"2024-9-21",
    image :"/pic3.jpg",

  },

  {
    id : "5",
    title : "Music or Dance Activity ",
    description: "Music or Dance plays a crucial role in children’s development by helping them develop rhythm, coordination, and motor skills. Whether they are playing an instrument, singing, or dancing to their favorite tunes, children gain a greater sense of self-expression and creativity. Music and dance also enhance cognitive abilities, such as memory and concentration. Through musical activities, kids also learn about patterns, tones, and pitch, which are the foundation of mathematical concepts. Dance, on the other hand, allows children to develop physical coordination and balance while expressing emotions through movement. Both activities can also build confidence, as children learn new skills and perform in front of others.",
    date:"2024-11-28",
    image :"/pic8.webp",

  },

  {
    id : "6",
    title : "Story Time",
    description: "Story Time is one of the most enriching activities for children. It not only fosters a love for reading but also improves literacy skills, including vocabulary, comprehension, and listening. As children listen to stories, they are transported into different worlds, which enhances their imagination and creativity. Storytelling teaches empathy, as children learn to understand different characters’ emotions and experiences. This helps children develop social and emotional intelligence by allowing them to consider other people’s feelings and perspectives. Additionally, storytelling introduces children to new ideas, cultures, and histories, expanding their understanding of the world. ",
    date:"2024-11-28",
    image :"/pic5.jpg",

  },
  {
    id : "7",
    title : "Yoga or Movement",
    description: "Yoga or Movement activities promote both mental and physical health. Yoga helps children develop flexibility, strength, and balance while also teaching them to relax and focus through mindfulness and breathing techniques. These activities not only improve physical health by encouraging regular movement but also reduce stress and anxiety. Yoga can be especially beneficial in helping children manage their emotions, increase their self-awareness, and develop concentration and mindfulness skills. It provides a peaceful break from the fast pace of daily life and teaches children how to calm their minds and bodies, which is valuable for managing emotions as they grow older.",
    date:"2024-11-28",
    image :"/pic6.avif",

  },
  {
    id : "8",
    title : "Outdoor Games ",
    description: "Outdoor Games such as soccer, tag, or hide-and-seek are crucial for children’s physical development. They encourage active movement, which improves cardiovascular health, coordination, and muscle strength. These games also promote teamwork, communication, and socialization, as children learn how to work together, follow rules, and respect each other’s space. Outdoor games foster problem-solving abilities, as kids often have to think quickly on their feet and strategize to win or succeed in the game. Additionally, spending time outdoors in nature has been linked to improved mental health and cognitive function, making these games beneficial for both physical and mental well-being.",
    date:"2024-11-28",
    image :"/pic7.jpg",

  },
  {
    id : "9",
    title : "Pet Care",
    description: "Finally, Pet Care is a wonderful way for children to learn responsibility, empathy, and compassion. When children care for pets, they learn how to provide for another living being’s needs, such as feeding, grooming, and exercising. This responsibility teaches them about the importance of commitment and the rewards that come with caring for others. Pet care also helps children develop emotional intelligence, as they learn to recognize and respond to the feelings of animals. Moreover, spending time with pets can boost a child’s mood and reduce stress, as animals offer unconditional love and companionship.",
    date:"2024-11-28",
    image:"/pic9.webp",

  },
 ];
    
 

export default  async function Page ({ params } : {params: Promise < {id: string}>;
}) {
   const resolvedParams =await params;// resolve the promise
   const { id } = resolvedParams;
   const Post = posts.find((p) => p.id === id);

   if (!Post) {
    return (
      

    
      <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found</h2>
    );
   }
const renderParagraphs = (description: string) => {
  return description.split("/n").map((para, index) => (
    <p key={index} className="mt-4 text-justify">
      {para.trim()}
    </p>
  ));
};

return (
  <div className="max-w-3xl mx-auto p-5  ">
    <h1 className=" md:text-4xl text-3xl font-bold text-amber-700 text-center"> 
      { " " }
      {Post.title}
      </h1>

  {Post.image && (
    <img
    src={Post.image} 
    alt={Post.title} 
    className="w-full h-full rounded-md mt-4"
    />
  )}
  <div className="mt-6 text-lg text-slate-700">
    {renderParagraphs(Post.description)}

  </div>

    
    <AuthorCard/>

    
  </div>
)};