import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-[#020617] text-black-900">
      <h1 className="text-[28px] text-white font-bold ml-5">Shopping List</h1>
      <ItemList />
    </main>
  );
}
