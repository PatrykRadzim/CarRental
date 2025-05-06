import React from "react";
import AboutSection from "../components/AboutSection";
import { Stack } from "@mui/material";

const About = () => {
  return (
    <Stack sx={{ marginTop: {xs: "2vh", md:"4vh"}, alignItems: "center" }}>
      <AboutSection
        header="Our Story"
        content={`From a small local garage to one of the most trusted car rental brands in the region — Top Car was born out of a passion for driving and a desire to make mobility simple.\nWhat started as a weekend side project with just 3 vehicles is now a full-fledged service helping thousands of people hit the road trouble-free.`}
        image="src\assets\roseanna-smith--qzLjuJEmsE-unsplash.jpg"
      />
      <AboutSection
        header="Our Mission"
        content={`At Top Car, we're all about accessibility, transparency, and reliability. Whether you're renting for a road trip or a quick city hop, we believe everyone deserves a smooth, stress-free ride.\nOur mission is simple: make renting a car feel as easy and safe as borrowing it from a friend.`}
        image="src/assets/why-kei-8e2gal_GIE8-unsplash.jpg"
        reverse
      />
      <AboutSection
        header="Why Choose Us?"
        content={
          <>
            <ul style={{ listStylePosition: "inside" }}>
              <li>A fleet that fits every journey</li>
              <li>Real human support - no bots, no scripts</li>
              <li>Clear pricing, no hidden surprises</li>
            </ul>
            We're not just another car rental service — we're your travel
            partner. And we’re always looking for new ways to make your
            experience even better.
          </>
        }
        image="src/assets/george-bannister-yHv5NFPMH1Q-unsplash.jpg"
      />
    </Stack>
  );
};

export default About;
