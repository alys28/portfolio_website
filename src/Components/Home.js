import "./Home.css";
const profilePic = require("../img/aly_pic.jpeg");

// style={{
//     backgroundImage: `url(${require("../img/blurry-gradient-haikei.png")})`,
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//   }}

const Home = () => {
  return (
    <div className="font-Montserrat dark:bg-[#121212]">
      <div className="flex flex-wrap">
        <div className="flex flex-col font-Montserrat flex-1 justify-center p-[10%]">
          <h1 className=" font-bold text-[50px] dark:text-white">
            Hi, I'm Aly!
          </h1>
          <h2 className="text-[30px] dark:text-white">Software Developer</h2>
          <h3 className="dark:text-white">
            Lorem Ipsufgherohruighreuiogheruiogheriuofghder oier guihfuaisfhaeo
            aerioupfghaewipf gaewuivg fidgfuilewbgreiu fdfuifg euifgdfuig es
          </h3>
        </div>
        <div className="flex flex-1 p-20 justify-center dark:text-white">
          <img
            src={profilePic}
            className="profile-pic"
            style={{
              height: "400px",
              width: "400px",
              borderRadius: "50%",
              minHeight: "100px",
              minWidth: "100px",
            }}
          />
        </div>
      </div>
      <div className="flex justify-center p-10">
        <button className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-500/70 ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
