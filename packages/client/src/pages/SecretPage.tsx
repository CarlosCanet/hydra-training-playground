function SecretPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-8 max-w-xl text-center">
        <h1 className="text-2xl font-bold text-fuchsia-700 mb-4">Secret Page</h1>
        <p className="text-fuchsia-400">Congratulations — you found the secret page</p>
        <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnlidXBwazRnYjI0N2diOWpqbmNjMzQ5bGF6a2RqZDdvdXVqM21pNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/g9582DNuQppxC/giphy.gif" alt="Leo DiCaprio toast for you!" height={500} className="pt-8"/>
      </div>
    </div>
  );
}

export default SecretPage;
