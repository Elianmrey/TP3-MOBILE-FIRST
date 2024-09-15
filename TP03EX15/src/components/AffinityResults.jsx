import PropTypes from "prop-types";
import UserProfile from './UserProfile';

export default function AffinityResults({ affinities }) {
    return (
        <div>
            <h2>Usuários com afinidades semelhantes</h2>
            {affinities.map(user => (
                <UserProfile key={user.id} user={user} />
            ))}
        </div>
    );
}


AffinityResults.propTypes = {
    affinities: PropTypes.arrayOf(PropTypes.object).isRequired  
}