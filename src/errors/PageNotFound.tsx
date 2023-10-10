import "../renderer/css/index.css";

interface PageNotFoundProps {
  title: string;
  text: string;
}

const PageNotFound: React.FC<PageNotFoundProps> = (data) => {
  return (
    <main className="bg-white h-screen w-screen">
      <section className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-[auto_1fr] m-auto w-full gap-[2em] lg:auto-rows-auto">
          <h1>{data.title ? data.title : "404 Page Not Found"}</h1>
          <p>{data.text ? data.text : "This page could not be found."}</p>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound