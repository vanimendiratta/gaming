export default function Header() {
    return (
      <header className="h-16 bg-[#232323] flex items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-orange-500">RANOLPH</h1>
        <div className="flex items-center space-x-4">
          <button className="w-8 h-8 rounded-full bg-[#333]">
            <span className="text-white">⚡</span>
          </button>
          <button className="w-8 h-8 rounded-full bg-[#333]">
            <span className="text-white">≡</span>
          </button>
        </div>
      </header>
    )
  }
  