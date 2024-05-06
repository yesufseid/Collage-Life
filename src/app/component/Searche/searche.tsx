import Card from "./Card"
import SearcheInput from './searcheInput';

export default function Searche() {
  return (
    <>
    <SearcheInput />
    <div className="w-full h-auto grid grid-cols-3 gap-y-2 mx-1 my-2">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    
    </>
  )
}
