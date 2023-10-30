const Footer = () => {
    return (
            <footer className="bg-[#04081D] mt-36">
                <div className="grid grid-cols-12 py-24 ml-10 mr-14">
                    <div className="col-span-3 flex flex-col justify-center items-center">
                        <img src="/LogoFooter.svg" alt="Logo da EPC"></img>
                    </div>
                    <div className="col-span-6 text-[#FFFFFF] grid grid-rows-5">
                        <h3 className="text-center text-lg">Contato</h3>
                        <div className="row-start-3 flex justify-left pl-44 gap-x-4">
                            <img src="/Email.svg" alt="email" className="w-8 h-6"></img>
                            <p className="w-1/2">escolapilotodecomputacao@gmail.com</p>
                        </div>
                        <div className="row-start-5 flex justify-left pl-44 gap-x-4">
                            <img src="/Instagram.svg" alt="instagram" className="w-8"></img>
                            <a href="https://www.instagram.com/epc_ufersa/#" className="w-1/2 h-6">@epc_ufersa</a>
                        </div>
                    </div>
                    <div className="col-span-3 text-[#FFFFFF] flex flex-col items-center">
                        <h3 className="text-center text-lg mb-1">Localização</h3>
                        <img src="/Localizacao.svg" alt="localização" className="w-8 mb-3"></img>
                        <p>UNIVERSIDADE FEDERAL RURAL DO SEMI-ÁRIDO</p>
                        <p>Av. Francisco Mota, 572</p>
                        <p>Bairro Costa e Silva</p>
                        <p>Mossoró-RN</p>
                        <p>CEP: 59.625-900</p>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;