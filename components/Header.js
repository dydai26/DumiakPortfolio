function Header() {
    try {
        return (
            <div
  className="header-container relative w-full h-48 flex flex-col justify-center px-8 rounded-2xl overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('./img/baner.jpg')" }}
  data-name="header"
>
  <div className="relative z-10">
    <h1 className="text-4xl font-bold text-white">Sofia Dumiak</h1>

    <span className="mt-2 inline-block px-3 py-1 border border-red-500 rounded-full text-white text-sm">
      Graphic Designer | SMM | UI
    </span>
  </div>
</div>

        

        );
    } catch (error) {
        console.error(error);
        return null;
    }
}

