// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Head } from '@inertiajs/react';
// import AppLayout from '@/layouts/app-layout';

// interface HeroSlide {
//   id?: number;
//   title: string;
//   description: string;
//   image: string;
// }

// const EditHome: React.FC = () => {
//   const [slides, setSlides] = useState<HeroSlide[]>([]);
//   const [newSlide, setNewSlide] = useState<HeroSlide>({
//     title: '',
//     description: '',
//     image: '',
//   });

//   const fetchSlides = async () => {
//     const res = await axios.get('/api/hero-slides');
//     setSlides(res.data);
//   };

//   useEffect(() => {
//     fetchSlides();
//   }, []);

//   const handleAdd = async () => {
//     await axios.post('/api/hero-slides', newSlide);
//     setNewSlide({ title: '', description: '', image: '' });
//     fetchSlides();
//   };

//   const handleUpdate = async (id: number, updatedSlide: HeroSlide) => {
//     await axios.put(`/api/hero-slides/${id}`, updatedSlide);
//     fetchSlides();
//   };

//   const handleDelete = async (id: number) => {
//     await axios.delete(`/api/hero-slides/${id}`);
//     fetchSlides();
//   };

//   return (
//     <>
//       <Head title="Edit Home" />
//       <AppLayout>
//         <div className="p-6 max-w-4xl mx-auto">
//           <h1 className="text-2xl font-semibold mb-6">Edit Hero Slides</h1>

//           {/* Add New Slide */}
//           <div className="border p-4 rounded-lg mb-6">
//             <h2 className="text-xl font-semibold mb-4">Add New Slide</h2>
//             <input
//               type="text"
//               placeholder="Title"
//               value={newSlide.title}
//               onChange={(e) => setNewSlide({ ...newSlide, title: e.target.value })}
//               className="border rounded p-2 w-full mb-3"
//             />
//             <textarea
//               placeholder="Description"
//               value={newSlide.description}
//               onChange={(e) => setNewSlide({ ...newSlide, description: e.target.value })}
//               className="border rounded p-2 w-full mb-3"
//             />
//             <input
//               type="text"
//               placeholder="Image URL"
//               value={newSlide.image}
//               onChange={(e) => setNewSlide({ ...newSlide, image: e.target.value })}
//               className="border rounded p-2 w-full mb-3"
//             />
//             <button
//               onClick={handleAdd}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Add Slide
//             </button>
//           </div>

//           {/* Existing Slides */}
//           <div className="space-y-4">
//             {slides.map((slide) => (
//               <div key={slide.id} className="border p-4 rounded-lg">
//                 <input
//                   type="text"
//                   value={slide.title}
//                   onChange={(e) =>
//                     handleUpdate(slide.id!, { ...slide, title: e.target.value })
//                   }
//                   className="border rounded p-2 w-full mb-2"
//                 />
//                 <textarea
//                   value={slide.description}
//                   onChange={(e) =>
//                     handleUpdate(slide.id!, { ...slide, description: e.target.value })
//                   }
//                   className="border rounded p-2 w-full mb-2"
//                 />
//                 <input
//                   type="text"
//                   value={slide.image}
//                   onChange={(e) =>
//                     handleUpdate(slide.id!, { ...slide, image: e.target.value })
//                   }
//                   className="border rounded p-2 w-full mb-2"
//                 />
//                 {slide.image && (
//                   <img
//                     src={slide.image}
//                     alt={slide.title}
//                     className="w-full h-48 object-cover rounded mb-2"
//                   />
//                 )}
//                 <button
//                   onClick={() => handleDelete(slide.id!)}
//                   className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </AppLayout>
//     </>
//   );
// };

// export default EditHome;
