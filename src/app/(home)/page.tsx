"use client";

import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { FullscreenLoader } from "@/components/fullscreen-loader";

export default function Home() {
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    {},
    { initialNumItems: 5 }
  );

  if (results === undefined) {
    return <FullscreenLoader label="Documents Loading..." />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
      </div>
      {results.map((doc) => (
        <p key={doc._id}>{doc.title}</p>
      ))}
    </div>
  );
}
