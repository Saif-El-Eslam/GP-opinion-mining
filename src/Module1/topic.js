import './topics.css';


import { useNavigate } from 'react-router-dom';

function Topic({topic}) {
    const navigate = useNavigate();

  return (
    <div className="topic" onClick={() => navigate('/opinion')}>
        {topic}
    </div>
  );
}

export default Topic;
