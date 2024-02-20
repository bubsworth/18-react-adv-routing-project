import { useParams, Link } from "react-router-dom";

import EventItem from "../components/EventItem";

function EventDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.eventId}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}

export default EventDetailPage;
