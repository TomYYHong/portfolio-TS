import React, { useState, useEffect } from "react";

interface BannerProps {
  message: string;
  onClose: () => void;
}

const Banner: React.FC<BannerProps> = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div
      className={`${
        visible ? "translate-y-0" : "-translate-y-full"
      } transform fixed top-0 left-0 right-0 bg-green-500 text-white p-4 text-center z-20`}
    >
      {message}
    </div>
  );
};

export default Banner;
