import TrainPreview from "@/components/train/TrainPreview";
import FilterButtons from "@/components/ui/FilterButtons";
import Header from "@/components/ui/Header";
import { Divider } from "@mui/material";

export default function TrainHomePage() {
  // TO DO: CALL DB TO FETCH EVENTS
  const events = [
    {
      id: "e1",
      event_details: {
        event_name: "Kayaking with your fellow friends",
        image_url: "/images/kayaking.jpg",
        quota: 100,
        start_date: "2024-07-28",
        start_time: "10:00",
        end_date: "2024-07-28",
        end_time: "16:00",
        published_date: "2024-07-15",
        published_time: "09:00",
        location: "Sham Shui Po",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        target_audience: ["Male", "Female"],
        event_tags: ["Outdoors", "Sports", "Kayaking"],
      },
    },
    {
      id: "e2",
      event_details: {
        event_name: "Kayaking with your fellow friends",
        image_url: "/images/kayaking.jpg",
        quota: 100,
        start_date: "2024-07-28",
        start_time: "10:00",
        end_date: "2024-07-28",
        end_time: "16:00",
        published_date: "2024-07-15",
        published_time: "09:00",
        location: "Sham Shui Po",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        target_audience: ["Male", "Female"],
        event_tags: ["Outdoors", "Sports", "Kayaking"],
      },
    },
  ];

  return (
    <div>
      <Header
        img="/images/kayaking.jpg"
        heading="Trainings"
        description="Review the events where you've volunteered and watch those requiring training."
      />
      <FilterButtons b1="Registered" b2="All" b3="Completed" b4="Filter" />
      <Divider />
      {events.map((event) => {
        return (
          <TrainPreview
            key={event.id}
            id={event.id}
            title={event.event_details.event_name}
            date={event.event_details.start_date}
            time={event.event_details.start_time}
            location={event.event_details.location}
            description={event.event_details.description}
            img={event.event_details.image_url}
          />
        );
      })}
    </div>
  );
}
