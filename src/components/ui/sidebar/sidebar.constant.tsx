import FileIcon from "../../../assets/fileIcon";
import HomeIcon from "../../../assets/homeIcon";
import MedicalFileIcon from "../../../assets/medicalFileIcon";
import ProfileIcon from "../../../assets/profileIcon";
import paths from "../../../router/router.paths";

export const menuItems = [
  {
    name: "Dashboard",
    path: paths.DASHBOARD,
    icon: <HomeIcon color="currentColor" />,
  },
  {
    name: "Perspectives",
    path: paths.PERSPECTIVES,
    icon: <MedicalFileIcon color="currentColor" />,
  },
  {
    name: "Tasks",
    path: paths.TRACKING,
    icon: <FileIcon color="currentColor" />,
  },
  {
    name: "Documents",
    path: paths.DOCUMENTS,
    icon: <ProfileIcon color="currentColor" />,
  },
];
