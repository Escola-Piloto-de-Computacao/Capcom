import React, { useEffect } from 'react';

type SliderProps = {
    numImages: number;
};

const Welcome: React.FC<SliderProps> = ({ numImages }) => {
    useEffect(() => {
        let keyframes = `
      @keyframes slide {
    `;

        for (let i = 0; i < numImages; i++) {
            keyframes += `
        ${(100 / numImages) * i}%, ${(100 / numImages) * (i + 1)}% {
            transform: translateX(-${(100 / numImages) * i}%);
        }
      `;
        }

        keyframes += `}
    `;

        const style = document.createElement('style');
        style.innerHTML = keyframes;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, [numImages]);

    return (
        <div>
            <div className="slider">
                <img src="/exemplo-imagem.png" className="mx-auto w-full object-center object-fill"></img>
                <img src="/ex1.jpg" className="mx-auto w-full object-center object-fill"></img>
                <img src="/ex2.jpg" className="mx-auto w-full object-center object-fill"></img>
                <img src="/ex3.jpg" className="mx-auto w-full object-center object-fill"></img>
            </div>
            <div>
                <h1 className="text-3xl mt-8 mb-4">Bem-vindo</h1>
                <p>Começe hoje a sua jornada para o próximo nível! etc etc</p>
                <div className="flex flex-row">
                    <div>

                    </div>
                    <div>
                        <h2></h2>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
