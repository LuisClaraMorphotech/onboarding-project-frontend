import "../renderer/css/index.css";

const InternalServerError = () => {
  return (
    <main className="bg-white h-screen w-screen">
      <section className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-[auto_1fr] m-auto w-full gap-[2em] lg:auto-rows-auto">
          <h1>500 Internal Error</h1>
          <p>Something went wrong.</p>
        </div>
      </section>
    </main>
  );
}

export default InternalServerError
