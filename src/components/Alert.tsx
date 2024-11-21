import { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add the `show` class to trigger fade-in after the component is mounted
    const timer = setTimeout(() => setVisible(true), 10); // Short delay to trigger CSS animation
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false); // Trigger fade-out
    // Wait for fade-out animation to complete before calling onClose
    setTimeout(onClose, 300); // Matches Bootstrap's fade animation duration
  };

  return (
    <div
      className={`alert alert-primary alert-dismissible fade ${
        visible ? "show" : ""
      }`}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={handleClose}
      ></button>
    </div>
  );
};

export default Alert;
