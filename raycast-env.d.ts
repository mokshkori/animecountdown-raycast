/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Default Layout - Choose the default layout for browsing anime */
  "layout": "list" | "grid",
  /** Default View - Choose the default section to show on startup */
  "viewType": "trending" | "upcoming",
  /** Title Truncation Length - Max title length in List view (default: 50) */
  "truncationLength": string,
  /** Grid Columns - Number of columns in Grid view */
  "gridColumns": "2" | "3" | "4" | "5"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {}
}

