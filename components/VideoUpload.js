import { useState } from 'react';
import useAxiosAuth from '@/hooks/useAxiosAuth';

const VideoUpload = () => {
  const axiosAuth=useAxiosAuth();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('title', title);
    formData.append('video_file', file);
  
    try {
      const response = await axiosAuth.post('/api/courses/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200 || response.status === 201) {
        alert('Video uploaded successfully!');
      } else {
        alert('Upload failed.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Video Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files[0])}
        required
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default VideoUpload;