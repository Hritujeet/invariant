"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

export const AddDerivationsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <Card className="border-border/50 shadow-sm bg-card/50">
      <CardHeader>
        <CardTitle className="text-xl">Derivation Details</CardTitle>
        <CardDescription>Enter the basic info, LaTeX expression, and upload the scanned notes.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input type="text" placeholder="e.g. Lagrangian Mechanics" id="title" name="title" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug URL</Label>
              <Input type="text" placeholder="e.g. lagrangian-mechanics" id="slug" name="slug" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="expression">Expression (LaTeX)</Label>
            <Input type="text" className="font-mono text-sm" placeholder="e.g. \mathcal{L} = T - V" id="expression" name="expression" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Short Description</Label>
            <Textarea placeholder="A brief summary for the cards..." id="description" name="description" className="resize-none" rows={3} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Full Content</Label>
            <Textarea placeholder="Detailed write-up..." id="content" name="content" className="min-h-[150px]" required />
          </div>

          <div className="space-y-2 bg-muted/30 p-4 rounded-lg border border-dashed border-border/60">
            <Label htmlFor="pdf" className="cursor-pointer">Upload PDF Document</Label>
            <Input type="file" accept=".pdf" id="pdf" name="pdf"/>
            <p className="text-[11px] text-muted-foreground mt-1">Upload the handwritten scan or derived notes.</p>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-3 border-t border-border/40 pt-4 bg-muted/10">
          <Button type="button" variant="outline" className="px-6">Cancel</Button>
          <Button type="submit" disabled={isSubmitting} className="px-6">
            {isSubmitting ? "Saving..." : "Save Derivation"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
