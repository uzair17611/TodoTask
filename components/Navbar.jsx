import Link from "next/link";

export default function Navbar() {
  return (
    <div >
    <div className="mt-20 flex flex-col w-full items-center justify-center">
      <img
        src="/profile.jpg" // Relative path to the image in the public directory
        alt="Profile Image" 
        className="rounded-full w-24 h-24" 
      />
      <nav className="flex justify-between items-center bg-white px-8 py-3 rounded-md mt-4 w-[600px]">
        <Link className="text-slate-400 " href={"/"}>
          Add new Task
        </Link>
        <Link className="" href={"/addTopic"}>
          <img src="/Plus.svg" alt="Add Topic" className="ml-2"/>
        </Link>
      </nav>
    </div>

    <div className="mt-10 flex flex-col w-full items-center justify-center">
    <nav className="flex  bg-[#bbb18c] bg-opacity-70 px-8 py-3 rounded-md mt-4 w-[600px] border border-slate-300">
  <img  src="/ham.svg"></img>
  <p className=" text-white font-bold ml-2">Your  Todos</p>
  <img src="/Chevron.svg" className="ml-auto"></img>

</nav>
    </div>

    </div>
  );
}
