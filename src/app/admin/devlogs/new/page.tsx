import React from "react";
import { AddDevlogsForm } from "@/components/site/add-devlogs-form";

export default function NewDevlogPage() {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center md:text-4xl mb-8">
        Add a new <span className="text-primary">Devlog</span>
      </h1>
      <div className="max-w-4xl mx-auto px-6">
        <AddDevlogsForm />
      </div>
    </div>
  );
}
