import { useEffect, useState } from 'react';
import useAxiosAuth from '@/hooks/useAxiosAuth';
import config from '@/configuration/config';
const VideoList = () => {
  const axiosAuth = useAxiosAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axiosAuth.get('/api/courses/videos/');
        setVideos(response.data); 
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <h1>Video List</h1>
      {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.title}</h3>
          <video controls width="400">
            <source src={`${config.media_host}${video.video_file}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default VideoList;