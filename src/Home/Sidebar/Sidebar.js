import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
      const getCats = async () => {
        const res = await axios.get("/categories");
        setCats(res.data);
      };
      getCats();
    }, []);
    return (
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img style={{width: '30%'}}
            src="https://c.ndtvimg.com/2020-04/p01dqsv_who-director-general-tedros-adhanom-ghebreyesus-reuters_625x300_09_April_20.jpg"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
            necessitatibus nostrum illum reprehenderit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
            necessitatibus nostrum illum reprehenderit.

          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    );
  }
export default Sidebar;