import {Link} from 'react-router-dom'
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops!....</h2>
            <p>The page you are looking for cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>
    
     );
}
 
export default NotFound;