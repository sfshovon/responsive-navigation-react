import PageTitle from "../Components/PageTitle";

const About = () => {
  return (
    <>
      <PageTitle title="About"/>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Page</h1>
      </div>
    </>
  );
};

export default About;