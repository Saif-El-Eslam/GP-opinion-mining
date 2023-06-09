import './articlesResults.css';

function Article({topic, keywords}) {

  return (
    <div className="article">
        <div className="article-card">
            <h3 className="topic">{topic}</h3>
            <ul className="keyword-list">
                {keywords.map((keyword, index) => (
                <li key={index} className="keyword">
                    {keyword}
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
}

export default Article;
