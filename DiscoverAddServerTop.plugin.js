/**
 * @name Discover Add Server To Top
 * @author Relykx
 * @description Moves Discover and Add Server buttons above the server list divider
 * @version 1.0.0
 *
 * @website https://github.com/relykxdev/discover-add-server-top
 * @source https://github.com/relykxdev/discover-add-server-top/blob/main/DiscoverAddServerTop.plugin.js
 * @updateUrl https://raw.githubusercontent.com/relykxdev/discover-add-server-top/refs/heads/main/DiscoverAddServerTop.plugin.js
 */

class DiscoverAddServerTop {
  start() {
    try {
      const addBtn = document.querySelector('[data-list-item-id="guildsnav___create-join-button"]')?.closest(".listItem__650eb");
      const discoverBtn = document.querySelector('[data-list-item-id="guildsnav___guild-discover-button"]')?.closest(".listItem__650eb");
      const divider = document.querySelector(".guildSeparator__252b6")?.closest(".listItem__650eb");

      if (addBtn && discoverBtn && divider) {
        divider.parentNode.insertBefore(addBtn, divider);
        divider.parentNode.insertBefore(discoverBtn, divider);
        console.log("Moved buttons above divider");
      } else {
        console.log("One or more elements not found");
      }
    } catch (e) {
      console.error("Error moving buttons:", e);
    }
  }

  stop() {
    // nothing to clean up here
  }
}

module.exports = DiscoverAddServerTop;
