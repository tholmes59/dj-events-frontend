import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function Events({ evnt }) {
  return (
    <Layout>
      <h1>Events</h1>
      {evnt.length === 0 ?? <h3>No events to show</h3>}
      {evnt.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const evnt = await fetch(`${API_URL}/api/events`)
    .then((res) => res.json())
    .then((data) => data);

  return {
    props: { evnt },
    revalidate: 1,
  };
}
