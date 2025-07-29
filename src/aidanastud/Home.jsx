function Home() {
    return (
      <div className="text-center py-20 px-4 bg-blue-50">
        <h1 className="text-4xl font-bold mb-4">Студенттерге арналған платформа</h1>
        <p className="text-lg text-gray-600 mb-6">
          Жатақхана, жұмыс және оқу орнын оңай табуға көмектесеміз.
        </p>
        <a href="/dormitories" className="bg-blue-600 text-white px-6 py-3 rounded-md">Жатақхана іздеу</a>
      </div>
    );
  }
  
  export default Home;