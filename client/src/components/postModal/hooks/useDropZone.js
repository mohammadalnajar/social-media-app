import { useState } from 'react';

const useDropZone = () => {
  const [files, setFiles] = useState([]);
  const [img, setImg] = useState('');
  const [showDropzone, setShowDropzone] = useState(false);

  return {
    files,
    setFiles,
    img,
    setImg,
    showDropzone,
    setShowDropzone,
  };
};

export default useDropZone;
