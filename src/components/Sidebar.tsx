export default function Sidebar() {
    return (
      <aside className="w-24 bg-[#232323] h-screen flex flex-col items-center py-6 fixed">
        <div className="space-y-8">
          <button className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center">
            <span className="text-orange-500">★</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center">
            <span className="text-white">♠️</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center">
            <span className="text-white">🎣</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center">
            <span className="text-white">⋯</span>
          </button>
        </div>
      </aside>
    )
  }
  
  