import mainImage from '../assests/main-image.png';
import handcomImage from '../assests/handcom.png';

const MainSection = () => {
  return (
    <div className="w-full flex flex-col items-end px-4 md:px-0">
      <img src={mainImage} alt="Insurance document signing" className="w-full h-auto max-w-full" />
      <img src={handcomImage} alt="Completed insurance document" className="w-full h-auto -mt-1 max-w-full" />
    </div>
  );
};

export default MainSection;
