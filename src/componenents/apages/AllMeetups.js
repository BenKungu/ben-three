import { useEffect, useState } from "react";
import MeetupList from "../layout/meetups/MeetupList";

const Data = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://deih43ym53wif.cloudfront.net/nairobi-kenya-shutterstock_784433020_d013532660.jpeg",
    address: "Nairobi s 87 kinoo city",
    description: "the best place to be in Waiyaki way",
  },

  {
    id: "m2",
    title: "second meetup",
    image: "https://hapakenya.com/wp-content/uploads/2018/07/Kisumu-City.jpg",
    address: "Kisumu paya beach 24 567 8WT",
    description:
      "Meeting at the lake side is absolutely amazing and you shouldnt miss",
  },

  {
    id: "m3",
    title: "third meetup",
    image:
      "https://scontent-mba1-1.xx.fbcdn.net/v/t39.30808-6/262855998_3397150660409637_3795961750183054357_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=QxcIco2kJiYAX8THFBg&tn=lYQlqNvIMpiNFvgL&_nc_ht=scontent-mba1-1.xx&oh=00_AfDVew_J-m_NtCpzoVU7W_xXNP9zz_UWeMNRkgiTRvzwsw&oe=63BD1637",
    address: "miharati kabati village 255-20301",
    description: "Most amazing countryside meetup with a lot of good scenery",
  },
];

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ben-three-default-rtdb.firebaseio.com/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } 

  return (
    <section>
      <h1> All Meetups </h1>
      <MeetupList meetups={Data} />
    </section>
  );
}

export default AllMeetups;
