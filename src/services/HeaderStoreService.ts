const pagesObj =
{
  dashboard: {
    title: "Dashboard",
    name: "Dashboard",
  },
  
  
  alerts: {
    title: "Alerts",
    name: "Alerts",
    subPages: [
      {
        title: "Alerts2",
        name: "Alerts"
      },
      
      {
        title: "Dashboard2",
        name: "Dashboard"
      }
    ]
  },
  
  loginPage: {
    title: "LoginPage",
    name: "LoginPage",
  },

}

export const pages = Object.values(pagesObj)


