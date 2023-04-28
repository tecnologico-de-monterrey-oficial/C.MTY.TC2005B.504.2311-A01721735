import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState } from 'react';

function BarProgress() {

  const [progress, setProgress] = useState(0);
  

  return (
    <div>
      <ProgressBar striped variant = "success" animated now = {progress} label={`${progress}%`} />
      
    </div>
  );
}

export default BarProgress;