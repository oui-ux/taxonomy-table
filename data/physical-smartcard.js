// data/physical-smartcard.js
// Physical SmartCard taxonomy

window.TAXONOMY_DATA["Physical SmartCard"] = [

  // ==================================================
  // Client Device | Login Access | Cert Expired
  // ==================================================
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Cert Expired", closeCode:"Resolved Technical issue", subCloseCode:"Smartcard tool issues: https://aka.ms/identityhelp-cert", kb:"" },

  // ==================================================
  // Client Device | Login Access | New Smart card
  // ==================================================
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"New Smart card", closeCode:"Resolved Technical issue", subCloseCode:"Re-directed the user to visit https://aka.ms/CloudMFA", kb:"" },
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"New Smart card", closeCode:"Resolved Technical issue", subCloseCode:"Renewed SmartCard certificates successfully", kb:"" },

  // ==================================================
  // Client Device | Login Access | Manager app
  // ==================================================
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Manager app", closeCode:"Resolved Technical issue", subCloseCode:"Re-installed Microsoft Smart Card Manager Application", kb:"" },

  // ==================================================
  // Client Device | Login Access | Reader
  // ==================================================
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Reader", closeCode:"Resolved Technical issue", subCloseCode:"Installed smartcard drivers and unblocked smartcard", kb:"" },
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Reader", closeCode:"Resolved Technical issue", subCloseCode:"Redirected to https://myorder.microsoft.com/ to order smartcard reader", kb:"" },
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Reader", closeCode:"Resolved Technical issue", subCloseCode:"Redirected to send an email to gsam@microsoft.com", kb:"" },

  // ==================================================
  // Client Device | Login Access | Smart card on Mac
  // ==================================================
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Reader", closeCode:"Resolved Technical issue", subCloseCode:"Performed Offline Unblock successfully", kb:"" },
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Reader", closeCode:"Resolved Technical issue", subCloseCode:"Changed Smart card pin", kb:"" },
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Reader", closeCode:"Resolved Technical issue", subCloseCode:"Renewed Smart card on Mac using AVD", kb:"" },
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Reader", closeCode:"Resolved Technical issue", subCloseCode:"Unblocked Smart card on Mac", kb:"" },
  { ci:"Physical SmartCard", category:"Client Device", subCategory:"Login Access", roleComponent:"Reader", closeCode:"Resolved Technical issue", subCloseCode:"Smart Card login on Mac", kb:"" }
];