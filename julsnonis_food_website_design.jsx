export default function JulsnonisFood() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* NAVBAR */}
      <header className="flex items-center justify-between p-4 shadow-md">
        <h1 className="text-2xl font-bold text-green-600">Julsnonis Food 🍽️</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#menu">Menu</a>
          <a href="#vendors">Vendors</a>
          <a href="#how">How it Works</a>
          <a href="#track">Track Order</a>
        </nav>
        <button className="bg-green-600 text-white px-4 py-2 rounded-xl">
          Order Now
        </button>
      </header>

      {/* HERO */}
      <section className="text-center py-20 bg-green-50">
        <h2 className="text-4xl font-bold mb-4">
          Order Delicious Food in Minutes 🍛
        </h2>
        <p className="mb-6 text-gray-600">
          Fresh meals from trusted vendors across Nigeria. Fast delivery to your doorstep.
        </p>
        <div className="flex justify-center gap-2">
          <input
            className="border p-3 w-1/2 rounded-xl"
            placeholder="Search meals, restaurants..."
          />
          <button className="bg-green-600 text-white px-6 rounded-xl">
            Search
          </button>
        </div>
        <div className="mt-6 space-x-4">
          <button className="bg-black text-white px-5 py-2 rounded-xl">
            Order Food Now
          </button>
          <button className="border px-5 py-2 rounded-xl">
            Become a Vendor
          </button>
        </div>
      </section>

      {/* FEATURED MEALS */}
      <section id="menu" className="p-10">
        <h3 className="text-2xl font-bold mb-6">🔥 Trending Meals</h3>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            "Jollof Rice 🍛",
            "Egusi Soup 🍲",
            "Fried Rice 🍚",
            "Suya 🔥",
          ].map((meal) => (
            <div key={meal} className="border rounded-xl p-4 shadow-sm">
              <div className="h-24 bg-gray-100 rounded mb-2" />
              <h4 className="font-semibold">{meal}</h4>
              <button className="mt-2 bg-green-600 text-white px-3 py-1 rounded">
                Order
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* VENDORS */}
      <section id="vendors" className="p-10 bg-gray-50">
        <h3 className="text-2xl font-bold mb-6">🏪 Trusted Vendors</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Mama Chops Kitchen",
            "Juls Kitchen",
            "City Foods",
          ].map((v) => (
            <div key={v} className="border rounded-xl p-4 bg-white">
              <h4 className="font-semibold">{v}</h4>
              <p className="text-sm text-gray-500">⭐ 4.7 Rating • Fast Delivery</p>
              <button className="mt-2 text-green-600">View Menu</button>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="p-10 text-center">
        <h3 className="text-2xl font-bold mb-6">⚡ How It Works</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <p className="text-4xl">🍔</p>
            <p>Choose Meal</p>
          </div>
          <div>
            <p className="text-4xl">🛒</p>
            <p>Place Order</p>
          </div>
          <div>
            <p className="text-4xl">🛵</p>
            <p>Fast Delivery</p>
          </div>
        </div>
      </section>

      {/* HEALTHY SECTION */}
      <section className="p-10 bg-green-50 text-center">
        <h3 className="text-2xl font-bold">🥗 Eat Healthy, Live Healthy</h3>
        <p className="text-gray-600 mt-2">
          Fresh, clean and nutritious meals from trusted vendors.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="p-6 bg-black text-white text-center">
        <p>© 2026 Julsnonis Food. All rights reserved.</p>
      </footer>
    </div>
  );
}
