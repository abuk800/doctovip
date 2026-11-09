import { PageHeader } from "@/components/PageHeader";
import { ArrowLink } from "@/components/Links";

export default function NotFound() {
  return (
    <>
      <PageHeader title="Diese Seite gibt es nicht.">
        <p>Der Link ist nicht mehr gültig oder war nie vorgesehen.</p>
      </PageHeader>
      <div className="wrap pb-32">
        <ArrowLink href="/">Zur Startseite</ArrowLink>
      </div>
    </>
  );
}
