import { sideLinks } from "$lib/data/sideLinks";

// a function that takes in a role parameter and returns an array of allowed links
export const useAllowedLinks = (role: string) => {
  switch (role) {
    case "Administrator":
      return [...sideLinks];
    case "Staff":
      return [...sideLinks];
    case "Rescuer":
      return sideLinks.filter(
        (link) =>
          link.title !== "Reports" &&
          link.title !== "Dashboard" &&
          link.title !== "Analytics" &&
          link.title !== "Inventory" &&
          link.title !== "Management"
      );
    case "Staff":
      return sideLinks.filter(
        (link) =>
          link.title !== "Announcements" &&
          link.title !== "Dashboard" &&
          link.title !== "Inventory" &&
          link.title !== "Management"
      );
    // case "Mechanic":
    //   return sideLinks.filter(
    //     (link) =>
    //       link.title !== "Reports" &&
    //       link.title !== "Settings" &&
    //       link.title !== "Management"
    //   );
    default:
      return [];
  }
};
