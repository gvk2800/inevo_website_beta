import mainImage from '../assests/main-image.png';
import handcomImage from '../assests/handcom.png';

const MainSection = () => {
  return (
    <div className="w-full flex flex-col items-end">
      <img src={mainImage} alt="Insurance document signing" className="w-full h-auto" />
      <img src={handcomImage} alt="Completed insurance document" className="w-full h-auto -mt-1" />
    </div>
  );
};

export default MainSection;
