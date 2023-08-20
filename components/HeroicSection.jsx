
export const HeroicSection = ({ children }) => {
  return (
    <>
      <div
        className="bg-almond relative lg:h-96 h-56 bg-contain bg-center"
        style={{ backgroundImage: "url('/images/Heroic-Banner.png')" }}
      >
        <div className="flex justify-center items-center max-w-7xl px-6 mx-auto h-full">
          {children}
        </div>
      </div>
    </>
  );
};
