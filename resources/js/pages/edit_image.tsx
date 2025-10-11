// import { Head, useForm, router } from '@inertiajs/react';
// import { FormEventHandler, useState } from 'react';
// import AuthenticatedLayout from '@/layouts/authenticated-layout';
// import { Upload, Trash2, Edit2, X } from 'lucide-react';

// interface Image {
//     id: number;
//     title: string;
//     path: string;
//     url: string;
//     original_name: string;
//     created_at: string;
// }

// interface Props {
//     images: {
//         data: Image[];
//         links: any;
//         meta: any;
//     };
// }

// export default function EditImages({ images }: Props) {
//     const [selectedImage, setSelectedImage] = useState<Image | null>(null);
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false);

//     const uploadForm = useForm({
//         image: null as File | null,
//         title: '',
//     });

//     const editForm = useForm({
//         title: '',
//     });

//     const handleUpload: FormEventHandler = (e) => {
//         e.preventDefault();
//         uploadForm.post(route('images.store'), {
//             onSuccess: () => {
//                 uploadForm.reset();
//             },
//         });
//     };

//     const handleEdit = (image: Image) => {
//         setSelectedImage(image);
//         editForm.setData('title', image.title);
//         setIsEditModalOpen(true);
//     };

//     const submitEdit: FormEventHandler = (e) => {
//         e.preventDefault();
//         if (selectedImage) {
//             editForm.put(route('images.update', selectedImage.id), {
//                 onSuccess: () => {
//                     setIsEditModalOpen(false);
//                     setSelectedImage(null);
//                 },
//             });
//         }
//     };

//     const handleDelete = (id: number) => {
//         if (confirm('Are you sure you want to delete this image?')) {
//             router.delete(route('images.destroy', id));
//         }
//     };

//     return (
//         <AuthenticatedLayout>
//             <Head title="Edit Images" />

//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6">
//                             <h2 className="text-2xl font-bold mb-6">Image Management</h2>

//                             {/* Upload Form */}
//                             <form onSubmit={handleUpload} className="mb-8 p-6 bg-gray-50 rounded-lg">
//                                 <h3 className="text-lg font-semibold mb-4">Upload New Image</h3>
//                                 <div className="grid gap-4">
//                                     <div>
//                                         <label className="block text-sm font-medium mb-2">
//                                             Title
//                                         </label>
//                                         <input
//                                             type="text"
//                                             value={uploadForm.data.title}
//                                             onChange={(e) => uploadForm.setData('title', e.target.value)}
//                                             className="w-full px-4 py-2 border rounded-lg"
//                                             required
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium mb-2">
//                                             Image File
//                                         </label>
//                                         <input
//                                             type="file"
//                                             accept="image/*"
//                                             onChange={(e) => uploadForm.setData('image', e.target.files?.[0] || null)}
//                                             className="w-full"
//                                             required
//                                         />
//                                     </div>
//                                     <button
//                                         type="submit"
//                                         disabled={uploadForm.processing}
//                                         className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
//                                     >
//                                         <Upload className="w-4 h-4" />
//                                         Upload Image
//                                     </button>
//                                 </div>
//                             </form>

//                             {/* Images Grid */}
//                             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                                 {images.data.map((image) => (
//                                     <div key={image.id} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
//                                         <img
//                                             src={image.url}
//                                             alt={image.title}
//                                             className="w-full h-48 object-cover"
//                                         />
//                                         <div className="p-4">
//                                             <h4 className="font-semibold mb-2 truncate">{image.title}</h4>
//                                             <div className="flex gap-2">
//                                                 <button
//                                                     onClick={() => handleEdit(image)}
//                                                     className="flex-1 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 flex items-center justify-center gap-1"
//                                                 >
//                                                     <Edit2 className="w-3 h-3" />
//                                                     Edit
//                                                 </button>
//                                                 <button
//                                                     onClick={() => handleDelete(image.id)}
//                                                     className="flex-1 bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 flex items-center justify-center gap-1"
//                                                 >
//                                                     <Trash2 className="w-3 h-3" />
//                                                     Delete
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Edit Modal */}
//             {isEditModalOpen && selectedImage && (
//                 <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//                     <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
//                         <div className="flex justify-between items-center mb-4">
//                             <h3 className="text-xl font-bold">Edit Image</h3>
//                             <button
//                                 onClick={() => setIsEditModalOpen(false)}
//                                 className="text-gray-500 hover:text-gray-700"
//                             >
//                                 <X className="w-6 h-6" />
//                             </button>
//                         </div>
//                         <form onSubmit={submitEdit}>
//                             <div className="mb-4">
//                                 <label className="block text-sm font-medium mb-2">
//                                     Title
//                                 </label>
//                                 <input
//                                     type="text"
//                                     value={editForm.data.title}
//                                     onChange={(e) => editForm.setData('title', e.target.value)}
//                                     className="w-full px-4 py-2 border rounded-lg"
//                                     required
//                                 />
//                             </div>
//                             <div className="flex gap-2">
//                                 <button
//                                     type="submit"
//                                     disabled={editForm.processing}
//                                     className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
//                                 >
//                                     Save Changes
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={() => setIsEditModalOpen(false)}
//                                     className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </AuthenticatedLayout>
//     );
// }