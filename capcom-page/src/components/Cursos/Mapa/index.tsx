import { Hidden } from '@mui/material';
import { Modal } from 'antd';
import { useState } from 'react';
import { FaMap } from 'react-icons/fa';

const Mapa = () => {
   const [showPopup, setShowPopup] = useState(false);

   const handleClose = () => setShowPopup(false);
   const handleShow = () => setShowPopup(true);

   return (
      <>
         <span onClick={handleShow}> LCC
            <FaMap className="inline-block ml-2 mb-1 cursor-pointer" color="#2949cc" />
         </span>
         <Modal
            title="Onde fica o LCC"
            visible={showPopup}
            onOk={handleClose}
            okButtonProps={{ style: { display: 'none' } }}
            onCancel={handleClose}
            cancelText="Fechar"
            width={700}
         >
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d993.3386942035216!2d-37.324046893254106!3d-5.206815396643446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba07a735278dbb%3A0x928859e3418a5753!2sR.%20Francisco%20Mota%2C%20572%20-%20Pres.%20Costa%20e%20Silva%2C%20Mossor%C3%B3%20-%20RN!5e0!3m2!1spt-PT!2sbr!4v1701038335452!5m2!1spt-PT!2sbr"
               width="100%"
               height="450"
               className="b-0"
               allowFullScreen={false}
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </Modal>
      </>
   );
};

export default Mapa;