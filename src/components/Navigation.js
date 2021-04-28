import { Link } from "react-router-dom";

// eslint-disable-next-line
export default ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">
          {userObj.displayName ? `${userObj.displayName}'s Profile` : "Profile"}
        </Link>
      </li>
    </ul>
  </nav>
);
