// data/identity-pass.js
// Identity Pass taxonomy dataset

window.TAXONOMY_DATA = window.TAXONOMY_DATA || {};

window.TAXONOMY_DATA["Identity Pass"] = [
  // ==========================================================
  // Application & Services > Login/Access
  // ==========================================================

  // Authenticator app setup
  {
    ci: "Identity Pass",
    category: "Application & Services",
    subCategory: "Login/Access",
    roleComponent: "Authenticator app setup",
    closeCode: "Technical issue resolved",
    subCloseCode: "Helped user to setup Authenticator app on Android",
    resolution: "Requested TAP to setup authenticator app for an existing user on android phone"
  },
  {
    ci: "Identity Pass",
    category: "Application & Services",
    subCategory: "Login/Access",
    roleComponent: "Authenticator app setup",
    closeCode: "Technical issue resolved",
    subCloseCode: "Helped user to setup Authenticator app on iOS",
    resolution: "Requested TAP to setup authenticator app for an existing user on iOS device"
  },

  // Certificate Validation Failed
  {
    ci: "Identity Pass",
    category: "Application & Services",
    subCategory: "Login/Access",
    roleComponent: "Certificate Validation Failed",
    closeCode: "Technical issue resolved",
    subCloseCode: "Requested TAP to renew Hello Cert/MFA setup",
    resolution: "Helped user to sync the device using TAP"
  },
  {
    ci: "Identity Pass",
    category: "Application & Services",
    subCategory: "Login/Access",
    roleComponent: "Certificate Validation Failed",
    closeCode: "Technical issue resolved",
    subCloseCode: "Helped user to setup AME/GME using TAP",
    resolution: "Helped user to setup AME/GME cards using TAP"
  },

  // New Device Setup
  {
    ci: "Identity Pass",
    category: "Application & Services",
    subCategory: "Login/Access",
    roleComponent: "New Device Setup",
    closeCode: "Technical issue resolved",
    subCloseCode: "Helped user with onboarding using TAP",
    resolution: "New user onboarding"
  }
];