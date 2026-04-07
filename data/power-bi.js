// data/power-bi.js
// Power BI taxonomy dataset
// CI: Power BI (fixed)
// Category: Application & Service (fixed)

window.TAXONOMY_DATA = window.TAXONOMY_DATA || {};

const CI = "Power BI";
const CAT = "Application & Service";
const CLOSE = "Resolved Technical Issue";

function row(subCategory, roleComponent, subCloseCode) {
  return {
    ci: CI,
    category: CAT,
    subCategory,
    roleComponent,
    closeCode: CLOSE,
    subCloseCode,
    kb: ""
  };
}

window.TAXONOMY_DATA["Power BI"] = [
  // ==========================================================
  // CONFIGURATION
  // ==========================================================
  row("Configuration", "Refresh", "Update the Storage Format"),
  row("Configuration", "Refresh", "Re-Published the Report"),
  row("Configuration", "Refresh", "Re-Published the Report"),
  row("Configuration", "Refresh", "Re-configure the Connection"),
  row("Configuration", "Refresh", "Recommended simplifying/reducing queries."),
  row("Configuration", "Refresh", "Updated the Datasource Credentials"),
  row("Configuration", "Refresh", "Published to different workspace"),
  row("Configuration", "Refresh", "Referred to the Azure Support"),
  row("Configuration", "Refresh", "Changing workspace capacity"),
  row("Configuration", "Refresh", "Referred to the Kusto Support"),
  row("Configuration", "Refresh", "re-configured the Query"),
  row("Configuration", "Refresh", "Upgrade workspace capacity"),

  row("Configuration", "Desktop", "Re-installed the Power BI Desktop App"),
  row("Configuration", "Desktop", "Installed the previous App version"),
  row("Configuration", "Desktop", "Re-Signedin to Desktop App"),

  row("Configuration", "Row-Level Security", "Referred to report owner"),
  row("Configuration", "Row-Level Security", "Fixed the row level security configuration"),

  row("Configuration", "Filter", "Reset report filters"),

  row("Configuration", "Usage Metrics", "Refreshed the metrics using REST API"),
  row("Configuration", "Usage Metrics", "Re-create usage metrics"),

  row("Configuration", "Paginated Report", "Published to different workspace"),

  row("Configuration", "Deployment pipeline", "Re-configured the dataset"),
  row("Configuration", "Deployment pipeline", "Design Limitation"),

  row("Configuration", "Dataset", "Update the Storage Format"),
  row("Configuration", "Dataset", "Re-Published the Report"),
  row("Configuration", "Dataset", "renamed the file and republished the report"),
  row("Configuration", "Dataset", "Re-configure the Connection"),
  row("Configuration", "Dataset", "Updated the Datasource Credentials"),
  row("Configuration", "Dataset", "Published to different workspace"),
  row("Configuration", "Dataset", "re-configured the Query"),
  row("Configuration", "Dataset", "Upgrade workspace capacity"),
  row("Configuration", "Dataset", "Re-configure the Connection"),

  row("Configuration", "Email subscription", "Deleted and re added the subcription"),
  row("Configuration", "Email subscription", "Advised to Purchase Premium Capacity"),

  row("Configuration", "Share/Manage Reports", "Design Limitation"),
  row("Configuration", "Share/Manage Reports", "Re-invited the user"),

  row("Configuration", "Reports", "Referred to data source admin"),
  row("Configuration", "Reports", "Referred to Workspace Owner"),

  row("Configuration", "Role", "Referred to Workspace Owner"),

  row("Configuration", "Publish", "Published to different workspace"),
  row("Configuration", "Publish", "renamed the file and republished the report"),
  row("Configuration", "Publish", "Design Limitation"),

  // ==========================================================
  // CONNECTIVITY
  // ==========================================================
  row("Connectivity", "Gateway", "Re-configured the Data Gateway"),
  row("Connectivity", "Gateway", "Re-installed the Gateway"),
  row("Connectivity", "Gateway", "Referred to Gateway Admin"),
  row("Connectivity", "Gateway", "Updated the Gateway Version"),

  row("Connectivity", "Refresh", "Update the Storage Format"),
  row("Connectivity", "Refresh", "Re-Published the Report"),
  row("Connectivity", "Refresh", "Recommended simplifying/reducing queries."),
  row("Connectivity", "Refresh", "renamed the file and republished the report"),
  row("Connectivity", "Refresh", "Re-configure the Connection"),
  row("Connectivity", "Refresh", "Updated the Datasource Credentials"),
  row("Connectivity", "Refresh", "Published to different workspace"),
  row("Connectivity", "Refresh", "Referred to the Azure Support"),
  row("Connectivity", "Refresh", "Changing workspace capacity"),
  row("Connectivity", "Refresh", "Referred to the Kusto Support"),
  row("Connectivity", "Refresh", "re-configured the Query"),
  row("Connectivity", "Refresh", "Upgrade workspace capacity"),
  row("Connectivity", "Refresh", "Backend code fix by Product Group"),

  row("Connectivity", "Sensitivity Label", "Downgraded the sensitivity label of the report/dataset."),
  row("Connectivity", "Sensitivity Label", "Disabled the IPv6 setting"),
  row("Connectivity", "Sensitivity Label", "Referred to Frontdesk team"),

  row("Connectivity", "Power Query", "re-configured the Query"),

  row("Connectivity", "External Tenant", "Re-invited the user"),

  row("Connectivity", "Usage Metrics", "Refreshed the metrics using REST API"),
  row("Connectivity", "Usage Metrics", "Re-create usage metrics"),

  row("Connectivity", "Export Data", "Referred to report owner"),
  row("Connectivity", "Export Data", "Installed Analyze in Excel"),

  row("Connectivity", "Dataset", "Refresh the dataset"),
  row("Connectivity", "Dataset", "Referred to report owner"),
  row("Connectivity", "Dataset", "Re-Published the Report"),

  // ==========================================================
  // CRASH / HANG / FREEZE
  // ==========================================================
  row("Crash/Hang Freeze", "Desktop", "Disabled Preview Feature"),
  row("Crash/Hang Freeze", "Desktop", "Re-installed the Power BI Desktop App"),
  row("Crash/Hang Freeze", "Desktop", "Installed the previous App version"),
  row("Crash/Hang Freeze", "Desktop", "Re-Signedin to Desktop App"),

  // ==========================================================
  // DATA MISSING / INCOMPLETE / INACCURATE
  // ==========================================================
  row("Data Missing/Incomplete/Inaccurate", "Role", "Referred to report owner"),

  row("Data Missing/Incomplete/Inaccurate", "Publish", "Re-Published the Report"),
  row("Data Missing/Incomplete/Inaccurate", "Publish", "Referred to Workspace Owner"),
  row("Data Missing/Incomplete/Inaccurate", "Publish", "Network (TCP/IP) connectivity"),

  row("Data Missing/Incomplete/Inaccurate", "Gateway", "Re-configured the Data Gateway"),
  row("Data Missing/Incomplete/Inaccurate", "Gateway", "Re-installed the Gateway"),
  row("Data Missing/Incomplete/Inaccurate", "Gateway", "Referred to Gateway Admin"),
  row("Data Missing/Incomplete/Inaccurate", "Gateway", "Updated the Gateway Version"),

  row("Data Missing/Incomplete/Inaccurate", "Refresh", "Removed the corrupted Data Source"),
  row("Data Missing/Incomplete/Inaccurate", "Refresh", "Referred to data source admin"),

  row("Data Missing/Incomplete/Inaccurate", "Row-Level Security", "Fixed the row level security configuration"),
  row("Data Missing/Incomplete/Inaccurate", "Row-Level Security", "Referred to report owner"),

  row("Data Missing/Incomplete/Inaccurate", "Filter", "Reset report filters"),

  row("Data Missing/Incomplete/Inaccurate", "Guest Sharing", "re-share the report"),
  row("Data Missing/Incomplete/Inaccurate", "Guest Sharing", "Re-invited the user"),

  row("Data Missing/Incomplete/Inaccurate", "Power Query", "Recommended simplifying/reducing queries."),

  row("Data Missing/Incomplete/Inaccurate", "Usage Metrics", "Refreshed the metrics using REST API"),
  row("Data Missing/Incomplete/Inaccurate", "Usage Metrics", "Re-create usage metrics"),

  row("Data Missing/Incomplete/Inaccurate", "Visual", "Recommended simplifying/reducing queries."),
  row("Data Missing/Incomplete/Inaccurate", "Visual", "reducing no of fields and type of field"),
  row("Data Missing/Incomplete/Inaccurate", "Visual", "re-create the visual"),
  row("Data Missing/Incomplete/Inaccurate", "Visual", "Refresh the dataset"),
  row("Data Missing/Incomplete/Inaccurate", "Visual", "Backend code fix by Product Group"),

  row("Data Missing/Incomplete/Inaccurate", "Paginated Report", "Published to different workspace"),

  row("Data Missing/Incomplete/Inaccurate", "Dataset", "Update the Storage Format"),
  row("Data Missing/Incomplete/Inaccurate", "Dataset", "Re-Published the Report"),
  row("Data Missing/Incomplete/Inaccurate", "Dataset", "renamed the file and republished the report"),
  row("Data Missing/Incomplete/Inaccurate", "Dataset", "Re-configure the Connection"),
  row("Data Missing/Incomplete/Inaccurate", "Dataset", "Updated the Datasource Credentials"),
  row("Data Missing/Incomplete/Inaccurate", "Dataset", "Published to different workspace"),
  row("Data Missing/Incomplete/Inaccurate", "Dataset", "re-configured the Query"),
  row("Data Missing/Incomplete/Inaccurate", "Dataset", "Upgrade workspace capacity"),

  // ==========================================================
  // POWER BI APP (as shown in your list)
  // ==========================================================
  row("Power BI App", "Power BI App", "Update App"),
  row("Power BI App", "Power BI App", "Referred to App owner"),

  // ==========================================================
  // FUNCTIONALITY
  // ==========================================================
  row("Functionality", "Copilot", "Advised to Purchase Premium Capacity"),
  row("Functionality", "Copilot", "Suggested to use Fabric Trial"),

  row("Functionality", "Dashboards", "Unpin and re-pin the reports"),
  row("Functionality", "Dashboards", "Design Limitation"),

  row("Functionality", "Gateway", "Re-configured the Data Gateway"),
  row("Functionality", "Gateway", "Re-installed the Gateway"),
  row("Functionality", "Gateway", "Referred to Gateway Admin"),
  row("Functionality", "Gateway", "Updated the Gateway Version"),

  row("Functionality", "Refresh", "Update the Storage Format"),
  row("Functionality", "Refresh", "Re-Published the Report"),
  row("Functionality", "Refresh", "renamed the file and republished the report"),
  row("Functionality", "Refresh", "Re-configure the Connection"),
  row("Functionality", "Refresh", "Recommended simplifying/reducing queries."),
  row("Functionality", "Refresh", "Updated the Datasource Credentials"),
  row("Functionality", "Refresh", "Published to different workspace"),
  row("Functionality", "Refresh", "re-configured the Query"),
  row("Functionality", "Refresh", "Upgrade workspace capacity"),
  row("Functionality", "Refresh", "Backend code fix by Product Group"),

  row("Functionality", "Desktop", "Re-installed the Power BI Desktop App"),
  row("Functionality", "Desktop", "Installed the previous App version"),
  row("Functionality", "Desktop", "Re-Signedin to Desktop App"),

  row("Functionality", "Premium Subscription", "Advised to Purchase Premium Capacity"),
  row("Functionality", "Premium Subscription", "Referred to Frontdesk team"),
  row("Functionality", "Premium Subscription", "Referred to Frontdesk team"),

  row("Functionality", "Deployment pipeline", "Re-configured the dataset"),
  row("Functionality", "Deployment pipeline", "Design Limitation"),

  // ==========================================================
  // INSTALLATION
  // ==========================================================
  row("Installation", "Desktop", "Re-installed the Power BI Desktop App"),

  // ==========================================================
  // LOGIN/ACCESS ISSUE
  // ==========================================================
  row("Login/Access issue", "Access issue", "Referred to data source admin"),
  row("Login/Access issue", "Access issue", "Referred to report owner"),
  row("Login/Access issue", "Access issue", "Referred to Workspace Owner"),
  row("Login/Access issue", "Access issue", "Backend code fix by Product Group"),

  row("Login/Access issue", "Dashboards", "Recommended simplifying/reducing queries."),

  row("Login/Access issue", "Desktop", "Updated sensitivity label of the report/dataset"),

  row("Login/Access issue", "Workspace", "Referred to Workspace Owner"),

  row("Login/Access issue", "Guest Sharing", "Re-invited the user"),

  row("Login/Access issue", "Share/Manage Reports", "Referred to data source admin"),

  row("Login/Access issue", "Service", "Re-Published the Report"),

  row("Login/Access issue", "Power BI App", "Referred to App owner"),

  row("Login/Access issue", "Export Data", "Referred to report owner"),
  row("Login/Access issue", "Export Data", "Installed Analyze in Excel"),

  row("Login/Access issue", "Custom Visual", "Reffered to custom Visual team"),

  row("Login/Access issue", "Visual", "re-configured the visual format"),

  row("Login/Access issue", "DataMart", "Updated the Datasource Credentials"),
  row("Login/Access issue", "DataMart", "re-configured the Query"),

  row("Login/Access issue", "Dataflow", "Updated the Datasource Credentials"),
  row("Login/Access issue", "Dataflow", "re-configured the Query")
];