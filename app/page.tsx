import Header from "./ui/header/header";

export default async function Home() {
  return (
    <main className="
      w-full
      min-h-[100vh]
      bg-background
      p-[30px]
      lg:py-[100px]
      lg:px-[100px]
    ">
      <Header />

      <div
        className="
          w-full
          flex
          justify-between
          items-center
          flex-col
          mt-4
        "
      >
        <div
          className="flex w-full mt-8"
        >
          <div className="
            w-full
            lg:flex
            lg:flex-row
            lg:justify-between
            lg:w-full
            gap-4
            grid
            sm:grid-cols-2
            grid-cols-1
          ">

            <div>

              <h4
                className="uppercase font-medium"
              >
                user
              </h4>

              <div
                className="
                bg-white
                rounded-md
                p-[24px]
                flex
                items-center
                cursor-pointer
                hover:opacity-[.7]
              "
              >
                <h4
                  className="p-10 w-[20px] h-[20px] rounded-full bg-blue-100 flex items-center justify-center text-2xl lg:text-4xl"
                >
                  👨‍💼
                </h4>
                <div className="ml-2">
                  <h1 className="font-bold text-xl">
                    User info
                  </h1>
                  <h5 className="opacity-[.7]">
                    Settings
                  </h5>
                </div>
              </div>
            </div>

            <div>

              <h4
                className="uppercase font-medium"
              >
                history
              </h4>
              <div
                className="
                  bg-white
                  rounded-md
                  p-[24px]
                  flex
                  items-center
                  cursor-pointer
                  hover:opacity-[.7]
                "
              >
                <h4
                  className="p-10 w-[20px] h-[20px] rounded-full bg-red-100 flex items-center justify-center text-2xl lg:text-4xl"
                >
                  🗒️
                </h4>
                <div className="ml-2">
                  <h1 className="font-bold text-xl lg:text-2xl">
                    Archive
                  </h1>
                  <h5 className="opacity-[.7]">
                    Check all the meetings
                  </h5>
                </div>
              </div>
            </div>

            <div>

              <h4
                className="uppercase font-medium"
              >
                meeting
              </h4>
              <div
                className="
                  bg-white
                  rounded-md
                  p-[24px]
                  flex
                  items-center
                  cursor-pointer
                  hover:opacity-[.7]
                "
              >
                <h4
                  className="p-10 w-[20px] h-[20px] rounded-full bg-purple-100 flex items-center justify-center text-2xl lg:text-4xl"
                >
                  ➕
                </h4>
                <div className="ml-2">
                  <h1 className="font-bold text-xl">
                    New meeting
                  </h1>
                  <h5 className="opacity-[.7]">
                    Schedule a meeting
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="
          w-full min-h-[70vh]
          flex
          items-center
          justify-center
          flex-col
          rounded-md
          mt-[24px]
        ">
          <div>
            <h1
              className="text-3xl text-center font-medium mt-4"
            >Meeting title</h1>

            <iframe src="https://us05web.zoom.us/j/85172946594?pwd=X0Gcfem74Zp941yU3K4fPkwWZKo38U.1" width={1000} height={500}></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
