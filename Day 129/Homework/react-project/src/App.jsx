import './App.css'

const App = () => {

  return (
    <div className="w-full h-screen ">
      <div className="w-full h-[15%] bg-[#14ae7c] flex justify-center items-center">
        <div className="w-[80%] h-[80%] uppercase flex justify-between items-center">
          <h1>your logo</h1>
          <div className="flex justify-around w-[40%]">
            <button className="uppercase">home</button>
            <button className="uppercase">about</button>
            <button className="uppercase">testimonials</button>
            <button className="uppercase">pricing</button>
            <button className="uppercase">contact</button>
            <button className="uppercase">social</button>
          </div>
        </div>
      </div>

      <div className="w-full h-[45%] flex justify-center items-center">
        <button className="uppercase p-2.5 bg-[#438bcb]">this template is alive</button>
      </div>

      <div className="w-full h-[20%] bg-[#14ae7c] flex justify-center items-center flex-col">
        <h1 className="text-[40px]">About Our Team</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>

      <div className="w-full h-[30%] flex flex-col">
          <div className="w-full h-[50%] flex flex-col justify-center items-center">
            <h1 className="text-[40px]">Our Team Members</h1>
            <p>Lorem Ipsum dolor Sit amet. consectetur adimscing elit. Curabltur nec nisl odio. Maur•s vehicula at nunc ld posuere.</p>
          </div>

          <div className="w-full h-[50%] flex justify-around items-center">
              <div className="w-[20%] h-full bg-red-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nihil ipsum quaerat, earum laboriosam velit nesciunt repellat. Debitis, illum facere?</div>
              <div className="w-[20%] h-full bg-green-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nihil ipsum quaerat, earum laboriosam velit nesciunt repellat. Debitis, illum facere?</div>
              <div className="w-[20%] h-full bg-yellow-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nihil ipsum quaerat, earum laboriosam velit nesciunt repellat. Debitis, illum facere?</div>
              <div className="w-[20%] h-full bg-blue-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem nihil ipsum quaerat, earum laboriosam velit nesciunt repellat. Debitis, illum facere?</div>
          </div>
      </div>
    </div>
  )
}

export default App
