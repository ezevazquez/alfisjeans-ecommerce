"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";
import {StudioProvider, StudioLayout} from 'sanity'

export default function StudioPage() {
  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 w-screen">
      <NextStudio config={config}>
        <StudioProvider config={config}>
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </div>
  );
}
