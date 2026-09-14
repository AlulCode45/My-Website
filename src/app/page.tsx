import React from "react";
import EditorialNav from "@/components/EditorialNav";
import EditorialHero from "@/components/EditorialHero";
import EditorialAbout from "@/components/EditorialAbout";
import PurpleEvent from "@/components/PurpleEvent";
import ProjectChapters from "@/components/ProjectChapters";
import TechAndLab from "@/components/TechAndLab";
import FieldNotes from "@/components/FieldNotes";
import ExperienceList from "@/components/ExperienceList";
import ClosingDispatch from "@/components/ClosingDispatch";
import StudioFooter from "@/components/StudioFooter";

export default function Home() {
  return (
    <>
      <EditorialNav />
      <main className="flex-1 relative z-10">
        <EditorialHero />
        <EditorialAbout />
        <PurpleEvent />
        <ProjectChapters />
        <TechAndLab />
        <FieldNotes />
        <ExperienceList />
        <ClosingDispatch />
      </main>
      <StudioFooter />
    </>
  );
}

