import "./stories.css";
//Componetns................
import UserStory from "./UserStory";

// Facke Apis.......
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Facke Apis.......
import StoriesData from "../../FackApis/StoriesData";
import { useEffect, useState } from "react";
import axios from "axios";


function Stories() {
  let [stories, setStories] = useState([]);
  let token = localStorage.getItem("token");
  let headers = {
    Authorization: "Bearer " + token,
  };
  useEffect(() => {
    axios
      .get("https://proj.nozoluna.com/api/user/stories", { headers })
      .then((response) => {
        console.log(response);
        setStories(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="Stories">
      <UserStory />

      <Swiper style={{ width: "80%" }} slidesPerView={4} spaceBetween={10}>
        {stories.map((story) => (
          // eslint-disable-next-line react/jsx-key
          <SwiperSlide>
            <div className="story" key={story.id}>
              <div className="user">
                <img
                  src={
                    "https://proj.nozoluna.com/public/dash/assets/img/" +
                    story.user.image
                  }
                  alt=""
                />
              </div>
              <img
                src={
                  "https://proj.nozoluna.com/public/dash/assets/img/" +
                  story.file
                }
                alt=""
              />
              <h6>{story.user.name}</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Stories;
