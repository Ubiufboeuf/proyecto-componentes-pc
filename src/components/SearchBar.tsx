export default function SearchBar() {
  function handleInput(e: any) {
  }
  
  return (
    <input id="search-bar" type="text" placeholder="Busca un componente de computadora" className="h-12 w-full max-w-xl rounded-xl px-4 focus-visible:outline-none" onInput={handleInput} /> 
  )
}