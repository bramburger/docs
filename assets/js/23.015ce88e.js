(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{231:function(t,e,o){"use strict";o.r(e);var a=o(0),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"troubleshooting-lab-connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-lab-connections"}},[t._v("#")]),t._v(" Troubleshooting lab connections")]),t._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#vpn"}},[t._v("VPN")]),o("ul",[o("li",[o("a",{attrs:{href:"#administrator-rights"}},[t._v("Administrator rights")])]),o("li",[o("a",{attrs:{href:"#local-firewalls"}},[t._v("Local firewalls")])]),o("li",[o("a",{attrs:{href:"#ip-whitelist"}},[t._v("IP whitelist")])]),o("li",[o("a",{attrs:{href:"#lost-vpn-passphrase"}},[t._v("Lost VPN passphrase")])]),o("li",[o("a",{attrs:{href:"#broken-connection"}},[t._v("Broken connection")])]),o("li",[o("a",{attrs:{href:"#wrong-password"}},[t._v("Wrong password")])]),o("li",[o("a",{attrs:{href:"#new-phone"}},[t._v("New phone")])]),o("li",[o("a",{attrs:{href:"#no-phone"}},[t._v("No phone")])]),o("li",[o("a",{attrs:{href:"#deactivated-account"}},[t._v("Deactivated account")])])])]),o("li",[o("a",{attrs:{href:"#ssh"}},[t._v("SSH")]),o("ul",[o("li",[o("a",{attrs:{href:"#connection-timeout"}},[t._v("Connection timeout")])]),o("li",[o("a",{attrs:{href:"#forgotten-passwords"}},[t._v("Forgotten passwords")])]),o("li",[o("a",{attrs:{href:"#broken-connection"}},[t._v("Broken connection")])]),o("li",[o("a",{attrs:{href:"#unresponsive-machine-oom-killer"}},[t._v("Unresponsive machine (OOM Killer)")])]),o("li",[o("a",{attrs:{href:"#warning-remote-host-identification-has-changed"}},[t._v("WARNING: Remote host identification has changed")])])])])])]),o("p"),t._v(" "),o("h2",{attrs:{id:"vpn"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vpn"}},[t._v("#")]),t._v(" VPN")]),t._v(" "),o("p",[t._v("Your lab connection is encrypted over a virtual private network (VPN) to ensure the confidentiality of the information. We have listed some of the things that may cause you trouble:")]),t._v(" "),o("h3",{attrs:{id:"administrator-rights"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#administrator-rights"}},[t._v("#")]),t._v(" Administrator rights")]),t._v(" "),o("p",[t._v("Windows users needs administrator rights on their local computer to successfully install OpenVPN. You will need to contact your local IT personnel for this installation if you do not hold such rights. See this page for details: "),o("router-link",{attrs:{to:"/getting-started/troubleshooting/#openvpn"}},[t._v("Installing OpenVPN on Windows without administrator rights")]),t._v(".")],1),t._v(" "),o("h3",{attrs:{id:"local-firewalls"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#local-firewalls"}},[t._v("#")]),t._v(" Local firewalls")]),t._v(" "),o("p",[t._v('Our VPN service communicate with your local machine on a specific port that needs to be allowed in your local firewall: UDP protocol on Port 1194 to and from IP 129.241.176.121. Blocked network connections will typically give a "The VPN failed because the connection attempt timed out"-error. Please contact your local IT department for assistance if you think this may be the case. Feel free to '),o("a",{attrs:{href:"/contact"}},[t._v("include us")]),t._v(" in the communication if you need assistance.")]),t._v(" "),o("h3",{attrs:{id:"ip-whitelist"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ip-whitelist"}},[t._v("#")]),t._v(" IP whitelist")]),t._v(" "),o("p",[t._v("We allow connection from known IP addresses only. This means that your VPN connection may be blocked if you connect from a (for us) unknown network outside Norway. Please look up your IP address ("),o("a",{attrs:{href:"http://ip4.me",target:"_blank",rel:"noopener noreferrer"}},[t._v("ip4.me"),o("OutboundLink")],1),t._v(") and "),o("a",{attrs:{href:"/contact"}},[t._v("forward to us")]),t._v(" if you think this is the case. We are happy to open for new connections.")]),t._v(" "),o("h3",{attrs:{id:"lost-vpn-passphrase"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#lost-vpn-passphrase"}},[t._v("#")]),t._v(" Lost VPN passphrase")]),t._v(" "),o("p",[t._v("Your VPN passphrase is stored on your local computer and used to decrypt your VPN certificate before connection. From time to time your local password keychain may update or otherwise render this passphrase inaccessible. You will need a new VPN certificate if this happens. "),o("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" on mail for such a request and allow a few days in shipping.")]),t._v(" "),o("h3",{attrs:{id:"broken-connection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#broken-connection"}},[t._v("#")]),t._v(" Broken connection")]),t._v(" "),o("p",[t._v("Your VPN session will reset after 12 hours. This will cause your connection to break. For examples, connections left running over night will not work the next morning. You will need to turn off your VPN and then initiate a new connection to get back into your lab.")]),t._v(" "),o("h3",{attrs:{id:"wrong-password"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wrong-password"}},[t._v("#")]),t._v(" Wrong password")]),t._v(" "),o("p",[t._v("If your VPN login suddenly stops working, and you are pretty sure your user name and mobile code are both correct, try to sync Google Authenticator's time settings: Start Google authenticator on your phone, tap the tree dots in the corner (menu button) and go to "),o("code",[t._v("Settings")]),t._v(" > "),o("code",[t._v("Time correction for codes")]),t._v(" and hit "),o("code",[t._v("Sync now")]),t._v(". Now, try to log in again. If this do not work, "),o("a",{attrs:{href:"/contact"}},[t._v("contact us")]),t._v(" for further investigation.")]),t._v(" "),o("h3",{attrs:{id:"new-phone"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-phone"}},[t._v("#")]),t._v(" New phone")]),t._v(" "),o("p",[t._v("We are happy to hear that! You will need a new Google authenticator code from us to connect your VPN again. "),o("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" on mail with a request for a new code and allow a few days for shipping. Follow this "),o("router-link",{attrs:{to:"/getting-started/how-to-connect/#_2-setup-google-authenticator"}},[t._v("guide")]),t._v(" for installation.")],1),t._v(" "),o("h3",{attrs:{id:"no-phone"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#no-phone"}},[t._v("#")]),t._v(" No phone")]),t._v(" "),o("p",[t._v("Unfortunately, you do need a phone to connect to your lab. You will use this both for your two-step verification code each time you log in and in our user identification process.")]),t._v(" "),o("h3",{attrs:{id:"deactivated-account"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deactivated-account"}},[t._v("#")]),t._v(" Deactivated account")]),t._v(" "),o("p",[t._v("Inactive accounts are deactivate after about 180 days. This will cause your login to fail if you have not visited your lab in such a time frame. "),o("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for an account reactivation.")]),t._v(" "),o("h2",{attrs:{id:"ssh"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[t._v("#")]),t._v(" SSH")]),t._v(" "),o("h3",{attrs:{id:"connection-timeout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#connection-timeout"}},[t._v("#")]),t._v(" Connection timeout")]),t._v(" "),o("p",[t._v("The most common causes of "),o("code",[t._v("Connection timed out")]),t._v(" responses are: (1) that your VPN connection is not working as intended ("),o("router-link",{attrs:{to:"/troubleshooting/connection/#vpn"}},[t._v("troubleshoot VPN")]),t._v("), (2) that you typed a wrong SSH password three (3) times in a row causing a 15 minute ban on further logins to your lab. If your VPN is working correctly, aim for a 15 minute coffee break before your retry. "),o("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" for further troubleshooting if you are still unable to connect.")],1),t._v(" "),o("h3",{attrs:{id:"forgotten-passwords"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#forgotten-passwords"}},[t._v("#")]),t._v(" Forgotten passwords")]),t._v(" "),o("p",[t._v("After the initial onboarding, you will need your password to install software using the "),o("code",[t._v("sudo apt install <software>")]),t._v(" command. If you have forgotten your password, "),o("a",{attrs:{href:"/contact"}},[t._v("contact us")]),t._v(" for a reset, and allow for a few days for effectuation. Another alternative is to ask if some of your lab colleagues may install the software for you using their own user account.")]),t._v(" "),o("h3",{attrs:{id:"broken-connection-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#broken-connection-2"}},[t._v("#")]),t._v(" Broken connection")]),t._v(" "),o("p",[t._v("Your SSH connection is transferred inside your VPN connection. You will therefore experience a sudden drop in your SSH connection if your VPN connection break, for example due to our "),o("router-link",{attrs:{to:"/troubleshooting/connection/#vpn"}},[t._v("12 hour timeout")]),t._v(", a "),o("router-link",{attrs:{to:"/troubleshooting/connection/#vpn"}},[t._v("broken internet connection")]),t._v(" etc. You will also experience a broken connection if your lab machine becomes unresponsive, for example due to an out of memory killer or other related issues (see below).")],1),t._v(" "),o("h3",{attrs:{id:"unresponsive-machine-oom-killer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#unresponsive-machine-oom-killer"}},[t._v("#")]),t._v(" Unresponsive machine (OOM Killer)")]),t._v(" "),o("p",[t._v("Your lab machines may become unresponsive. You will notice this as a lost connection. A typical reason for this is that one or more a processes inside your machine consumed all the memory, initiating a "),o("a",{attrs:{href:"https://www.memset.com/docs/additional-information/oom-killer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Out Of Memory Killer"),o("OutboundLink")],1),t._v(" (OOM Killer). You will be unable to log onto your lab if an OOM Killer is triggered on your "),o("code",[t._v("home")]),t._v(" machine. You will be able to log into your lab, although unable to log into the affected "),o("code",[t._v("iaas")]),t._v(" or "),o("code",[t._v("blue")]),t._v(" machines, if an OOM Killer is triggered on other machines in your lab. Your data will not be affected of OOM Killers. "),o("a",{attrs:{href:"/contact"}},[t._v("Contact us")]),t._v(" us for a machine restart.")]),t._v(" "),o("h3",{attrs:{id:"warning-remote-host-identification-has-changed"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#warning-remote-host-identification-has-changed"}},[t._v("#")]),t._v(" WARNING: Remote host identification has changed")]),t._v(" "),o("p",[t._v("You might get this warning message the first time you connect to a new machine inside your lab:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("     @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nSomeone could be eavesdropping on you right now "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("man-in-the-middle attack"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nIt is also possible that a "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" key has just been changed.\nThe fingerprint "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the ECDSA key sent by the remote "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" is\nPlease contact your system administrator.\nAdd correct "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" key "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /home/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/.ssh/known_hosts to get rid of this message.\nOffending ECDSA key "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" /home/"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("username"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/.ssh/known_hosts:"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  remove with:\n  ssh-keygen -f "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/<username>/.ssh/known_hosts"')]),t._v(" -R "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("machine-name"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nECDSA "),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" key "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("machine-name"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" has changed and you have requested strict checking.\n")])])]),o("p",[t._v("The warning tells you that such a discrepancy between the expected and observed key might be due to an attack. "),o("strong",[t._v("You may ignore this message inside your lab.")]),t._v(" The reason for the warning is that your RSA key has changed when the machine was rebuilt.")]),t._v(" "),o("p",[t._v("You can remove such messages by running the command that are stated at the bottom in the screen message, for example:")]),t._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[t._v("ssh-keygen -f "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home/<username>/.ssh/known_hosts"')]),t._v(" -R "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("machine-name"),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),o("p",[t._v("Your message will be slightly different as the "),o("code",[t._v("username")]),t._v(" and "),o("code",[t._v("machine-name")]),t._v(" will be unique to you and your lab.")]),t._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),o("p",[t._v("If you see this message any other time, please "),o("a",{attrs:{href:"/contact"}},[t._v("contact us")]),t._v(" for further investigations.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);