import PresentationCard from "./PresentationCard/PresentationCard";
import nestorAvatar from "./../../assets/profile/avatar.jpeg";
import { FaGithub, FaGitlab } from "react-icons/fa";
import React from "react";

export default function DevelopCard(): React.ReactElement {
  return (
    <div className="develop-card">
      <PresentationCard
        mainImage={nestorAvatar}
        title="Mis repositorios"
        socialLinks={[
          {
            href: "https://github.com/nesnest",
            icon: <FaGithub />,
            altText: "GitHub",
          },
          {
            href: "https://gitlab.com/NesNest",
            icon: <FaGitlab />,
            altText: "GitLab",
          },
        ]}
      />
    </div>
  );
}
