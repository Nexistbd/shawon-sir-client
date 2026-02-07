interface ClassCardProps {
  image: string;
  duration: string;
  title: string;
  icon: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
  image,
  duration,
  title,
  icon,
}) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <div className="relative h-64 bg-gradient-to-b from-transparent to-black/30">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur rounded-full w-16 h-16 flex items-center justify-center">
          <img src={icon} alt="play" className="w-6 h-6" />
        </div>
      </div>

      <div className="bg-gradient-to-t from-black/80 to-transparent p-6 absolute bottom-0 w-full">
        <div className="bg-[#ff7f50] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
          {duration}
        </div>
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </div>
    </div>
  </div>
);

export default ClassCard;
