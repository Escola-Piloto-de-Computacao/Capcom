import ScrollView from "../ScrollView";

type Image = {
    src: string;
    alt: string;
};

const Welcome = ({ images }: { images: Image[] }) => {
    return (
        <div>
            <ScrollView images={images} />
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
