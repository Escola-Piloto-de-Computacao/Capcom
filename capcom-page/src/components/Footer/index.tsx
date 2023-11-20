import { BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
    return (
        <footer className="bg-[#04081D] text-white">
            <div className="grid grid-cols-6 py-6 h-64 mx-10 items-center">
                <div className="col-span-2 flex h-40">
                    <img src="/Logo_m1.svg"></img>
                </div>
                <div className="col-span-2 flex flex-col text-white justify-center gap-5">
                    <h3 className="text-center text-xl">Contato</h3>
                    <div className="ml-14">
                        <div className="flex items-center gap-2">
                            <HiOutlineMail size={30}/>
                            <p className="w-1/2">escolapilotodecomputacao@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsInstagram size={30}/>
                            <a href="https://www.instagram.com/epc_ufersa/#" className="w-1/2 h-6">@epc_ufersa</a>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 flex items-center flex-col justify-center gap-5">
                    <h3 className="text-xl">Localização</h3>
                    <img src="/Localizacao.svg" className=""></img>
                    <p className="">Av. Francisco Mota, 572 - Bairro Costa e Silva, Mossoró RN | CEP: 59.625-900, +55 84 3317-8200 CNPJ: 24.529.265/0001-40</p>
                </div>
            </div>
        </footer>
    );
};


export default Footer;