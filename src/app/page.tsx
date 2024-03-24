import AutoComplete from "./component/AutoComplet"
import Card from "./component/Card"

export default function Home() {
  return (
    <main>
      <div  className="w-full flex justify-center items-center  gap-5 my-3 ">
        <input type="text" className="w-[600px] mx-3  rounded-full h-10 border-2
         border-green-600 focus:outline-none focus:ring focus:ring-green-300 focus:border-0" />
        {/* <AutoComplete /> */}
        </div>
        <div className="grid md:grid-cols-3 md:mx-10 my-10 justify-center md:w-fit  w-full md:gap-10">
        {[1,2,3,4].map((o)=>{
          return <Card />
        })}
        </div>
    </main>
  );
}
