(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{251:function(a,s,t){"use strict";t.r(s);var e=t(0),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sshfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sshfs"}},[a._v("#")]),a._v(" SSHFS")]),a._v(" "),t("p",[a._v("This page describe how you can mount your labs file system over an encrypted connection.")]),a._v(" "),t("p",[a._v("Depending on you security model, you may mount selected part of your storage system to your client computer over VPN.")]),a._v(" "),t("h2",{attrs:{id:"install-software-packages-on-linux-debian"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-software-packages-on-linux-debian"}},[a._v("#")]),a._v(" Install software packages on linux (Debian)")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Install sshfs:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" sshfs\n")])])])])]),a._v(" "),t("h2",{attrs:{id:"install-software-packages-on-os-x-and-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-software-packages-on-os-x-and-macos"}},[a._v("#")]),a._v(" Install software packages on OS X and macOS")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("REQUIREMENT")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Install Homebrew package manager for macOS: brew"),t("OutboundLink")],1)])]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Install fuse4x:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew cask "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" osxfuse\n")])])])]),a._v(" "),t("li",[t("p",[a._v("Allow developer in "),t("code",[a._v("System Preferences")]),a._v(" -> "),t("code",[a._v("Security & Privacy")]),a._v(" -> "),t("code",[a._v("General")])])]),a._v(" "),t("li",[t("p",[a._v("Install sshfs:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("brew "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" sshfs\n")])])])]),a._v(" "),t("li",[t("p",[a._v("Reboot macOS before continuing")])])]),a._v(" "),t("h2",{attrs:{id:"mount-your-lab-storage-to-your-computer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mount-your-lab-storage-to-your-computer"}},[a._v("#")]),a._v(" Mount your lab storage to your computer")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("Connect your HUNT Cloud VPN")])]),a._v(" "),t("li",[t("p",[a._v("Set labname")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("labname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("labname"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# export labname=demolab")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("Make a folder on the local computer that is dedicated as mount point for your lab storage:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" ~/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage\n")])])])]),a._v(" "),t("li",[t("p",[a._v("Mount your storage using sshfs:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("sshfs "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-entry: ~/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage -o follow_symlinks -o "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("volname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("\n")])])]),t("p",[a._v("e.g. "),t("code",[a._v("sshfs demolab-entry: demolab -o volname=demolab")])])]),a._v(" "),t("li",[t("p",[a._v("You can make an alias in profile/rc config ("),t("code",[a._v("~/.bash_profile")]),a._v(", "),t("code",[a._v("~/.bashrc")]),a._v(", or "),t("code",[a._v("~/.zshrc")]),a._v(") for easier access:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"alias '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-mount=sshfs "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-entry: ~/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage -o follow_symlinks -o volname="),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" ~/.profile\n")])])])])]),a._v(" "),t("p",[a._v("That's it.\nWith a little bit of luck you should be able to find your lab folders in \"Finder\"...\nIf not, don't hesitate to contact us "),t("a",{attrs:{href:"/contact"}},[a._v("here")]),a._v(" so we can improve this guide together.")]),a._v(" "),t("h2",{attrs:{id:"unmount-your-lab-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unmount-your-lab-storage"}},[a._v("#")]),a._v(" Unmount your lab storage")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("If you wish to stop the mount before you turn off your computer or vpn, you turn it off with this command:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("umount")]),a._v(" ~/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${labname}")]),a._v("-storage\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);