import { Avatar } from "@mui/material";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

interface PalestrantesProps {
   palestrante1: palestrante;
   palestrante2?: palestrante;
}

interface PalestranteProp {
   palestrante: palestrante;
}

interface palestrante {
   nome: string;
   frase: string;
   foto: string;
   instagram: string;
   linkedin: string;
   github: string;
}

const Github: React.FC<PalestranteProp> = ({ palestrante }) => {
   if (palestrante.github != "" && palestrante.github != null && palestrante.github != undefined) {
      return (
         <a href={palestrante.github} title="LinkedIn" className="hover:text-sky-400" target="_blank" rel="noopener noreferrer">
            <BsGithub size={25} />
         </a>
      );
   } else {
      return null;
   }
}

const Linkedin: React.FC<PalestranteProp> = ({ palestrante }) => {
   if (palestrante.linkedin != "" && palestrante.linkedin != null && palestrante.linkedin != undefined) {
      return (
         <a href={palestrante.linkedin} title="LinkedIn" className="hover:text-sky-400" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={25} />
         </a>
      );
   } else {
      return null;
   }
};

const Instagram: React.FC<PalestranteProp> = ({ palestrante }) => {
   if (palestrante.instagram != "" && palestrante.instagram != null && palestrante.instagram != undefined) {
      return (
         <a href={palestrante.instagram} title="LinkedIn" className="hover:text-sky-400" target="_blank" rel="noopener noreferrer">
            <BsInstagram size={25} />
         </a>
      );
   } else {
      return null;
   }
};

const Redes: React.FC<PalestranteProp> = ({ palestrante }) => {
   return (
      <div className="flex pt-3 gap-2">
         <Instagram palestrante={palestrante} />
         <Linkedin palestrante={palestrante} />
         <Github palestrante={palestrante} />
      </div>
   );
};

const Palestrantes: React.FC<PalestrantesProps> = ({ palestrante1, palestrante2 }) => {
   console.log(palestrante1.foto as string);
   if (palestrante2) { //se tem 2 palestrantes
      return (
         <div className="flex flex-col gap-12">
            <div className="flex-1 flex space-x-3">
               <Avatar
                  alt={palestrante1.nome}
                  src={palestrante1.foto}
                  sx={{
                     width: { xs: 72, sm: 92, md: 110 },
                     height: { xs: 72, sm: 92, md: 110 }
                  }}
               />
               <div>
                  <div className="flex gap-3">
                     <h1 className="text-2xl font-extralight pt-2 whitespace-nowrap">{palestrante1.nome}</h1>
                     <Redes palestrante={palestrante1} />
                  </div>
                  <p className="font-mono text-xs" style={{ maxWidth: '25ch' }}>{palestrante1.frase}</p>
               </div>
            </div>
            <div className="flex-1 flex space-x-3">
               <Avatar
                  alt={palestrante2.nome}
                  src={palestrante2.foto}
                  sx={{
                     width: { xs: 72, sm: 92, md: 110 },
                     height: { xs: 72, sm: 92, md: 110 }
                  }}
               />
               <div>
                  <div className="flex gap-3">
                     <h1 className="text-2xl font-extralight pt-2 whitespace-nowrap">{palestrante2.nome}</h1>
                     <Redes palestrante={palestrante2} />
                  </div>
                  <p className="font-mono text-xs" style={{ maxWidth: '25ch' }}>{palestrante2.frase}</p>
               </div>
            </div>
         </div>
      );
   } else {
      return (
         <div className="flex flex-col gap-12">
            <div className="flex-1 flex space-x-3">
               <Avatar
                  alt={palestrante1.nome}
                  src={palestrante1.foto}
                  sx={{
                     width: { xs: 72, sm: 92, md: 110 },
                     height: { xs: 72, sm: 92, md: 110 }
                  }}
               />
               <div>
                  <div className="flex gap-3">
                     <h1 className="text-2xl font-extralight pt-2 whitespace-nowrap">{palestrante1.nome}</h1>
                     <Redes palestrante={palestrante1} />
                  </div>
                  <p className="font-mono text-xs" style={{ maxWidth: '25ch' }}>{palestrante1.frase}</p>
               </div>
            </div>
         </div>
      );
   }
};

export default Palestrantes;