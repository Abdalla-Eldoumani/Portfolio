const ResumePage = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-slate-950">
        <iframe
          src="/my-resume.pdf"
          className="w-full h-full"
          title="Abdalla Eldoumani's Resume"
        />
      </div>
    );
  };
  
  export default ResumePage;
  