interface TagProps {
   tag: string;
   color: string;
};

const Tags: React.FC<TagProps> = ({ tag, color }) => {

   if (tag.trim() === '') {
      return null;
   }

   const colorMap: { [key: string]: string } = {
      '#000000': 'white',
      '#c800ff': 'white',
      '#1100ff': 'white',
      '#fc1e29': 'white',
      '#004cff': 'white',
      '#ff0000': 'white'
   };

   return (

      <div className="text-xs rounded-md" style={{
         backgroundColor: color,
         color: colorMap[color] || 'black',
         padding: '0.1rem 0.3rem',
      }}>
         {tag}
      </div>

   );
};

export default Tags;
