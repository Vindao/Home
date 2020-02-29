export const mapRoutes = (route: string): number => {
  switch (route) {
    case '/':
      return 0;
      break;
    case '/services':
      return 1;
      break;
    default:
      return 2;
  }
};
