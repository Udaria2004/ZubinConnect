import GreenButton from "../../ui/buttons/GreenButton";
import RedButton from "../../ui/buttons/RedButton";
import AppointInfo from "./AppointInfo";

export default function RequestAppointment(props) {
  const { title, img, date, time, location, status } = props;
  return (
    <div className="flex justify-between ml-28 mr-28 p-8 pt-4 pb-4 border border-gray-200 rounded-xl">
      <AppointInfo
        img={img}
        title={title}
        date={date}
        time={time}
        location={location}
        status={status}
      />
      <div className="flex flex-col justify-end mb-2">
        <GreenButton>Accept</GreenButton>
        <RedButton>Decline</RedButton>
      </div>
    </div>
  );
}