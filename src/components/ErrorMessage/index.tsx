import "./ErrorMessage.scss";
import { ReactComponent as CloseIcon } from "./CloseIcon.svg";

const ErrorMessage = ({
  displayError,
  setDisplayError,
}: {
  displayError: Boolean;
  setDisplayError: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      className={displayError ? "error-message show" : "error-message hide"}
      onClick={() => setDisplayError(false)}
    >
      <span>Couldn't load the URL. Please try another one.</span>
      <CloseIcon />
    </button>
  );
};

export default ErrorMessage;
