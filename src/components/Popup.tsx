import { FC } from "react";

interface PopupProps {
  message: string;
  onClose: () => void;
}

const Popup: FC<PopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md text-black">
        <p>{message}</p>
        <button 
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
