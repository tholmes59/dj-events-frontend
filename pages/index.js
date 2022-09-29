import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";
import Link from "next/link";
import Events from "./events";

export default function HomePage({ evnt }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {evnt.length === 0 ?? <h3>No events to show</h3>}
      {evnt.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {evnt.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
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
