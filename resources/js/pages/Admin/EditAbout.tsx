import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout'; // Adjust the path if needed

const EditHome: React.FC = () => {
  return (
    <>
      <Head title="Edit Home" />
      <AppLayout>
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Edit About</h1>

          
        </div>
      </AppLayout>
    </>
  );
};

export default EditHome;
