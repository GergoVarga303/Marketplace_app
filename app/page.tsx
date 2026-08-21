import Card from "./ui/card";
import Nav from "./ui/navbar";
import { getLatestListings } from "./lib/data";

export default async function Page(){
  const listings = await getLatestListings(); 
  return(
    <main className="min-h-screen bg-gray-100">

      {/* Colored box at top, may be replaced later*/}
      <section className="mx-auto max-w-6xl rounded-2xl bg-emerald-600 px-8 pt-8 text-white shadow">
        <h1 className="flex justify-center text-4xl font-bold">
          Marketplace
        </h1>
        {/* Search bar-this will be replaced by Search React comp */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-xl bg-white px-5 py-3 text-gray-900 outline-none"
          />
        </div>

        {/* Navigation- will be replaced by react comp */}
        <Nav />
      </section>

      {/* Cards- these will be replaced by Card react components */}
      <section className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">

        {listings.map((listing) => (
          <Card key={listing.id} product={listing} />
        ))}

      </section>

    </main>
  )
}