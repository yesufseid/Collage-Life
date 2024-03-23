import AutoComplete from "./component/AutoComplet"

export default function Home() {
  return (
    <main>
      <div  className="w-screen flex justify-center ">
        <input type="text" className="w-[600px]  mx-auto rounded-full h-10 border-2 border-green-600 focus:outline-none focus:ring focus:ring-violet-300 focus:border-0" />
        
        </div>
        <AutoComplete />
    </main>
  );
}
