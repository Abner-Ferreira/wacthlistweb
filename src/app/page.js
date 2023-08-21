
export default function Home() {
  return (
    <nav className="bg-yellow-400 flex justify-between items-center">
      
      <ul className="flex gap-12 p-6 items-end text-gray-800 text-sm">
        <li>
          <a href="#">
            <h1 className="text-2xl font-bold text-black">WatchList</h1>
          </a>
        </li>
        <li><a href="/">HOME</a></li>
        <li><a href="/favoritos">FAVORITOS</a></li>
        <li><a href="/configuracoes">CONFIGURAÇÕES</a></li>
      </ul>

      <div className="h-20 w-13  overflow-hidden flex-col mr-4">
        <img src="https://i.pravatar.cc/100" alt="Avatar do usúario" className="rounded-full h-14"/>
        <p className="text-gray-800">Usúario</p>
      </div>
    </nav>
  )
}
