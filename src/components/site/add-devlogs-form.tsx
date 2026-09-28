"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export const AddDevlogsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <Card className="border-border/50 shadow-sm bg-card/50">
      <CardHeader>
        <CardTitle className="text-xl">Devlog Details</CardTitle>
        <CardDescription>Document your development progress and upload screenshots.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input type="text" placeholder="e.g. Broad-Phase Collision" id="title" name="title" required />
            </div>

          <div className="space-y-2">
            <Label htmlFor="description">Short Description</Label>
            <Textarea placeholder="A brief summary for the devlog cards..." id="description" name="description" className="resize-none" rows={3} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Full Content</Label>
            <Textarea placeholder="Detailed devlog write-up..." id="content" name="content" className="min-h-[150px]" required />
          </div>

          <div className="space-y-2 bg-muted/30 p-4 rounded-lg border border-dashed border-border/60">
            <Label htmlFor="images" className="cursor-pointer">Upload Images</Label>
            <Input type="file" multiple accept="image/*" id="images" name="images" className="cursor-pointer file:text-primary file:font-semibold file:bg-primary/10 file:border-0 hover:file:bg-primary/20 file:rounded-md file:px-2 file:-ml-2 file:mr-4 file:transition-colors bg-transparent border-0 shadow-none px-0 h-auto" />
            <p className="text-[11px] text-muted-foreground mt-1">Select one or more images/screenshots for this entry.</p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-3 border-t border-border/40 pt-4 bg-muted/10">
          <Button type="button" variant="outline" className="px-6">Cancel</Button>
          <Button type="submit" disabled={isSubmitting} className="px-6">
            {isSubmitting ? "Saving..." : "Save Devlog"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
