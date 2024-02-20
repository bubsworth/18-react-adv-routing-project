import EventItem from "../components/EventItem";

function EventDetailPage() {
  return (
    <>
      <h1> Event Detail Page</h1>
      <EventItem />
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}

export default EventDetailPage;
