export const createPageUrl = (pageName) => {
  // Convert page name to URL format with proper kebab-case
  return `/${pageName.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}`;
};
