import PropTypes from "prop-types";

export default function UserProfile({ user }) {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>{`Nível de afinidade: ${user.affinity}`}</p>
        </div>
    );
}

UserProfile.propTypes = {
    user: PropTypes.object.isRequired
}
