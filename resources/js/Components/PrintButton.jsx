import React from 'react';
import { FaPrint } from "react-icons/fa";


const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button className="btn text-[26px]"  onClick={handlePrint}>
        <FaPrint />
    </button>
  );
};

export default PrintButton;