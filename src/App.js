import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import Carousel from "react-material-ui-carousel";
function App() {
  const [data, setData] = useState([
    {
      franchisee: "Call of Duty",
      titles: [
        {
          title: "Modern Warefare 1",
          cover_image: "https://images8.alphacoders.com/102/1021953.jpg",
          background_image:
            "https://c4.wallpaperflare.com/wallpaper/364/251/812/call-of-duty-4-modern-warfare-remastered-call-of-duty-4-modern-warfare-remastered-call-of-duty-wallpaper-preview.jpg",
          title_icon:
            "https://logos-world.net/wp-content/uploads/2022/07/Modern-Warfare-Logo.png",
        },
        {
          title: "Modern Warefare 2",
          cover_image:
            "https://cdn.mos.cms.futurecdn.net/Ute2aEVA8SqD7sGVTzX5pn-970-80.jpg.webp",
          background_image:
            "https://images.hdqwalls.com/wallpapers/call-of-duty-modern-warfare-2-campaign-remastered-4k-vw.jpg",
          title_icon:
            "https://static.wikia.nocookie.net/logopedia/images/a/ae/CoD_Modern_Warfare_II_%282022%29_logo.png/revision/latest?cb=20220525030301",
        },
        {
          title: "Modern Warefare 3",
          cover_image:
            "https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/WP%20Media%20Folder%20-%20esports-com/app/uploads/2021/08/COD-MW3-720x405.jpg",
          background_image:
            "https://images.hdqwalls.com/wallpapers/call-of-duty-modern-warfare-3-4k-do.jpg",
          title_icon:
            "https://aux.iconspalace.com/uploads/1749566629615563716.png",
        },
      ],
    },
    {
      franchisee: "Grand Theft Auto",
      titles: [
        {
          title: "Grand Theft Auto 1",
          cover_image:
            "https://upload.wikimedia.org/wikipedia/en/e/e7/GTA_-_Box_Front.jpg",
          background_image:
            "https://e1.pxfuel.com/desktop-wallpaper/704/198/desktop-wallpaper-grand-theft-auto-1-gta-1.jpg",
          title_icon:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Grand_Theft_Auto_logo_series.svg/250px-Grand_Theft_Auto_logo_series.svg.png",
        },
        {
          title: "Grand Theft Auto 2",
          cover_image:
            "https://psxmedia.ign.com/psx/image/object/012/012390/600209.jpg",
          background_image:
            "https://cdn.cloudflare.steamstatic.com/steam/apps/12180/header.jpg?t=1618852840",
          title_icon:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/b99146ba-0e78-43c7-a010-a48d50c5d19b/d82bgva-8011194a-a7d6-421b-97d3-6434f080e1ab.png",
        },
        {
          title: "Grand Theft Auto 3",
          cover_image:
            "https://cdn.mobygames.com/covers/4175686-grand-theft-auto-iii-windows-front-cover.jpg",
          background_image: "https://wallpaperaccess.com/full/1443968.jpg",
          title_icon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUe4cmj_hbeGQMKDh_wmlFyUfEWQfziL45Sg&usqp=CAU",
        },
      ],
    },
    {
      franchisee: "Assassin's Creed",
      titles: [
        {
          title: "ASSASSIN’S CREED – 2007",
          cover_image:
            "https://cdn.mos.cms.futurecdn.net/fKZ9fz38ruD9buwcibP5Ba-320-80.jpg",
          background_image: "https://images5.alphacoders.com/540/540654.jpg",
          title_icon:
            "https://geeksleeprinserepeat.com/wp-content/uploads/2015/02/ac.jpg",
        },
        {
          title: "Assassin's Creed II (2009)",
          cover_image:
            "https://oyster.ignimgs.com/mediawiki/apis.ign.com/assassins-creed-2/e/e9/Assassins_creed_ii.jpg",
          background_image: "https://images.alphacoders.com/109/109613.jpg",
          title_icon:
            "https://aux.iconspalace.com/uploads/assassins-creed-2-icon-256.png",
        },
        {
          title: "Assassin's Creed: Brotherhood (2010)",
          cover_image:
            "https://m.media-amazon.com/images/M/MV5BZjc5NWU2ZjMtNTVkOC00MzBmLWI5M2YtZmVhNWU5Mjg2ZGQyXkEyXkFqcGdeQXVyMjM5NzU3OTM@._V1_.jpg",
          background_image:
            "https://free4kwallpapers.com/uploads/originals/2015/11/12/assassins-creed-brotherhood-1080p-wallpaper.jpg",
          title_icon:
            "https://e1.pngegg.com/pngimages/60/644/png-clipart-assassins-creed-brotherhood-assassinscreedbrotherhood-icon.png",
        },
      ],
    },
  ]);
  const [activeTab, setActiveTab] = useState(data[0].franchisee);
  const [activeTitle, setActiveTitle] = useState(data[0].titles[0]);
  // const [activeChild, setActiveChild] = useState(0);
  const items = useMemo(() => [1, 2, 3, 4], []);
  const changeChild = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        setActiveTab((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
      } else if (e.key === "ArrowRight") {
        setActiveTab((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
      } else if (e.key === "ArrowTop") {
        setActiveTab((a) => (a - 1 > items.length - 1 ? 0 : a - 1));
      } else if (e.key === "ArrowBottom") {
        setActiveTab((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
      }
    },
    [items]
  );

  useEffect(() => {
    document.addEventListener("keydown", changeChild);

    return function cleanup() {
      document.removeEventListener("keydown", changeChild);
    };
  });
  return (
    <div
      className="wrapper"
      style={{
        backgroundImage: `url(${activeTitle.background_image})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-between p-5">
        <div className="flex gap-5">
          {data.map((frenchiseData) => {
            return (
              <div>
                <div
                  style={{
                    cursor: "pointer",
                    fontWeight: `${
                      activeTab == frenchiseData.franchisee ? "bold" : "normal"
                    }`,
                    color: `${
                      activeTab == frenchiseData.franchisee ? "white" : "gray"
                    }`,
                  }}
                  onClick={() => {
                    setActiveTab(frenchiseData.franchisee);
                    setActiveTitle(frenchiseData.titles[0]);
                  }}
                >
                  {frenchiseData.franchisee}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-5 text-white">
          <div>
            <img
              style={{ width: "20px", height: "20px" }}
              src="search2.png"
            ></img>
          </div>
          <div>
            <img
              style={{ width: "20px", height: "20px" }}
              src="settings2.png"
            ></img>
          </div>
          <div>
            <img
              style={{ width: "20px", height: "20px" }}
              src="profile.png"
            ></img>
          </div>
          <div>07:35 PM</div>
        </div>
      </div>

      <div className=" mt-5" style={{ padding: "0px 0px 0px 75px" }}>
        {data
          .filter((d) => d.franchisee === activeTab)
          .map((fren) => {
            return (
              <div className="flex gap-5 text-red-600">
                {fren.titles.map((title) => {
                  return (
                    <div onClick={() => setActiveTitle(title)}>
                      <img
                        style={{
                          cursor: "pointer",
                          width: `${
                            activeTitle.title === title.title ? "145px" : "50px"
                          }`,
                          height: `${
                            activeTitle.title === title.title ? "145px" : "50px"
                          }`,
                          borderRadius: "15px",
                          border: "2px solid #f688f6",
                        }}
                        src={title?.cover_image}
                      ></img>
                    </div>
                  );
                })}
              </div>
            );
          })}
        <div className="mt-5 text-white title-demo">
          <span>{activeTab}:</span>
          <span>{activeTitle.title}</span>
        </div>
      </div>

      <div className="ml-5" style={{ marginTop: "100px" }}>
        <div className="ml-5 title-fre" style={{ textTransform: "uppercase" }}>
          {activeTab}
        </div>
        <div className="ml-5 title-fren2">{activeTitle.title}</div>
        <div className="mt-3">
          <button className="buy-now">Buy now</button>
        </div>
      </div>

      <div className="flex justify-end" style={{ marginTop: "100px" }}>
        <div>
          <div className=" title-fre3">{activeTab}</div>
          <div className="title-fren3">{activeTitle.title}</div>
        </div>
      </div>
    </div>
  );
}
export default App;
