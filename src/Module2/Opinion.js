import './opinion.css';

import { Link } from "react-router-dom";


function Opinion({topic, person}) {
  return (
    <div className='opinion'>
        <div className='opinion-wrapper'>
            <h1 className='opinion-header'> Here is {person||'"person"'}'s opinion about {topic||'"topic"'}. </h1>

            <div className='opinion-content'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliq
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliq
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliq
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliq
                </p>
            </div>
        </div>

        <div className='opinion-wrapper'>
            <h1 className='opinion-header'> Compare with your opinion </h1>

            <div className='opinion-content'>
                <textarea id='compare-opinion-input' type="text" placeholder="Your Opinion"></textarea>
            </div>

            <Link className='margin-top-down-50' to="/comparison-result"> <button id='compare-button'>Compare</button> </Link>
        </div>
    </div>  
  );
}

export default Opinion;
