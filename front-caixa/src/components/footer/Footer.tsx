function Footer() {
  return (
    <div className="bg-[#1A237E] min-h-[300px] text-white flex flex-wrap flex-col items-center justify-center w-[100%]">
      <div className="flex flex-wrap justify-center align-middle items-center gap-10">
        <div className="w-[25%] h-[70%]">
          <p className="font-bold text-2xl">Empresa:</p>
          <p className="font-serif text-justify text-[12px]">
            Lorem ipsum dolor sit amet. Ea ipsum sapiente non earum quia et
            similique accusantium cum tenetur corporis sit suscipit doloremque
            est unde officiis! Et libero accusamus nam quis alias vel
            praesentium commodi.
          </p>
        </div>
        <div className="w-[25%] h-[70%]">
          <p className="font-bold text-2xl">Algo Mais:</p>
          <p className="font-serif text-justify text-[12px]">
            Lorem ipsum dolor sit amet. Ea ipsum sapiente non earum quia et
            similique accusantium cum tenetur corporis sit suscipit doloremque
            est unde officiis! Et libero accusamus nam quis alias vel
            praesentium commodi.
          </p>
        </div>
        <div className="w-[25%] h-[70%]">
          <p className="font-bold text-2xl">Algo Mais:</p>
          <p className="font-serif text-justify text-[12px]">
            Lorem ipsum dolor sit amet. Ea ipsum sapiente non earum quia et
            similique accusantium cum tenetur corporis sit suscipit doloremque
            est unde officiis! Et libero accusamus nam quis alias vel
            praesentium commodi.
          </p>
        </div>
      </div>

      <hr className="border-t-2 border-white my-6 w-[80%] mx-auto" />

      <div className="flex flex-wrap justify-between w-[80%]">
        <p className="font-bold text-2xl">
          <span className="font-bold text-3xl">PR</span>brate
        </p>
        <div className="flex gap-4">
          <p>About</p>
          <p>Help</p>
          <p>Legal</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
