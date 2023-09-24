export default function NoResults() {
  return (
    <>
      <div className="flex items-center justify-center mt-10 bg-white">
        <div className="flex flex-col">
          <span className="text-center font-bold opacity-30"></span>
          <div className="flex flex-col items-center">
            <div className="text-indigo-500 font-bold text-7xl">
              OOPS ! NO RESULTS FOUND
            </div>
            <div className="text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8">
              The page you are looking for could not be found.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
