import GamingFutureImage from "../asset/Image/GamingProject.png"
import ReactUI from "../asset/Image/ReactFrontendUI.png"

type projectDataType = {
    title: string;
    description : string;
    imageUrl: string;
    projectUrl: string;
}
export const projectsData : projectDataType[] = [
  {
    title: "Gaming Future",
    description:
      "Gaming's future holds immersive virtual worlds, AI-driven experiences, realistic graphics, cross-platform play, and evolving storytelling, reshaping how we play and connect in digital realms.",

    imageUrl: GamingFutureImage,
    projectUrl: "https://gaming-future.vercel.app/",
  },
  {
    title: "React Frontend UI",
    description:
      "React empowers modern web UI with reusable components, dynamic data rendering, and a declarative approach. It fosters interactive, responsive, and efficient user interfaces for seamless web experiences.",

    imageUrl: ReactUI,
    projectUrl: "https://reactkit-pink.vercel.app/",
  },
];
