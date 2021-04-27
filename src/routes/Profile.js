import { useHistory } from "react-router";
import { authService } from "../fbase";

// eslint-disable-next-line
export default () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
