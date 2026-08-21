export default function Card(){
    return(
        <div className="aspect-square overflow-hidden rounded-2xl bg-white shadow">
          <div className="h-2/3 bg-gray-300"></div>
          <div className="p-4">
            <h2 className="text-xl font-semibold">Item</h2>
            <p className="mt-2 text-gray-600">
              Placeholder description
            </p>
          </div>
        </div>
    )
}