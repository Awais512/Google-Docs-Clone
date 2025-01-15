"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Home() {
  const documents = useQuery(api.documents.get);

  if (!documents) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
      </div>
      {documents.map((doc) => (
        <p key={doc._id}>{doc.title}</p>
      ))}
    </div>
  );
}
