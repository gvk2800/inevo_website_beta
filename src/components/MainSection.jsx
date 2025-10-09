import websiteGif from '../assests/website gif.gif';

const MainSection = () => {
  return (
    <div className="w-full flex justify-center px-4 md:px-0">
      <img
        src={websiteGif}
        alt="Website demo"
        className="w-auto max-w-full max-h-[80vh] object-contain"
      />
    </div>
  );
};

export default MainSection;
