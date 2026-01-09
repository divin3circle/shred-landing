export const LINKS = {
  macamd64:
    "https://github.com/divin3circle/shred/releases/download/v1.1/shred_1.1_darwin_amd64.tar.gz",
  macarm64:
    "https://github.com/divin3circle/shred/releases/download/v1.1/shred_1.1_darwin_arm64.tar.gz",
  linuxamd64:
    "https://github.com/divin3circle/shred/releases/download/v1.1/shred_1.1_linux_amd64.tar.gz",
  linuxarm64:
    "https://github.com/divin3circle/shred/releases/download/v1.1/shred_1.1_linux_arm64.tar.gz",
  windowsamd64:
    "https://github.com/divin3circle/shred/releases/download/v1.1/shred_1.1_windows_amd64.zip",
  github: "https://github.com/divin3circle/shred",
  docker: "https://hub.docker.com/r/sylusabel/shred",
};
export interface Platform {
  name: string;
  iconUrl: string;
  oldestSupportedVersion: string;
  latestVersion: string;
  description: string;
}

export interface VersionHistory {
  version: string;
  releaseDate: string;
  changelog: string[];
  description: string;
}

export interface PrivacyPolicy {
  description: string;
  lastUpdated: string;
  link: string;
}

export interface AppData {
  name: string;
  description: string;
  features: string[];
  developer: string;
  icon: string;
  category: string;
  gallery: Gallery;
  github: string;
  githubStartCount: number;
  age: number;
  period: string;
  language: string;
  size: number;
}

export interface Gallery {
  images: string[];
}

export const platforms = [
  { name: "macOS", icon: "macos.png" },
  { name: "Linux", icon: "linux.png" },
  { name: "Windows", icon: "windows.jpg" },
  { name: "Docker", icon: "docker.png" },
];

export const bannerImages = {
  shred: "/shred-home.png",
  gosetup: "/gosetup-home.png",
};

export const appIcons = {
  shred: "/shred-icon.jpg",
  gosetup: "/gosetup-icon.png",
};

export const appGalleries = {
  shred: {
    images: [
      "/shred-dashboard.png",
      "/shred-home.png",
      "/shred-receive.png",
      "/shred-send.png",
      "/shred-history.png",
      "/shred-dashboard.png",
    ],
  },
  gosetup: {
    images: [
      "/gosetup-1.png",
      "/gosetup-2.png",
      "/gosetup-3.png",
      "/gosetup-home.png",
      "/gosetup-1.png",
      "/gosetup-2.png",
    ],
  },
};

export const appData = {
  gosetup: {
    name: "GoSetup",
    description:
      "A modern Terminal UI (TUI) for scaffolding Go backend projects with a complete, production-ready structure.",
    features: [
      "Interactive CLI Experience - Beautiful TUI built with OpenTUI and React",
      "Complete Project Structure - Pre-configured directories and files for professional Go projects",
      "Database Ready - Includes PostgreSQL migrations and schemas",
      "Docker Support - Docker and docker-compose configurations included",
      "Go Modules - Automatic go.mod initialization and dependency management",
      "Current Directory Support - Scaffold into existing directory with . as project name",
    ],
    developer: "Divin3circle",
    icon: "/gosetup-icon.png",
    category: "Developer Tools",
    gallery: appGalleries.gosetup,
    github: "https://github.com/divin3circle/gosetup",

    githubStartCount: 5,
    age: 6,
    period: "months",
    language: "Js",
    size: 68,
  },
  shred: {
    name: "Shred",
    description:
      "A terminal-native Hedera wallet built with Go. Manage your Hedera accounts, send and receive HBAR, and interact with the Hedera network directly from your terminal.",
    features: [
      "Secure Wallet Management: BIP-39 mnemonic generation with Argon2id encryption",
      "Hedera Integration: Full support for Hedera accounts and HBAR transactions",
      "Beautiful TUI: Terminal user interface built with Bubble Tea",
      "Multi-Wallet Support: Create and manage multiple wallets",
      "Cross-Platform: Works on macOS, Windows, and Linux",
      "Auto-Lock: Automatic wallet locking after inactivity",
    ],
    developer: "Divin3circle",
    icon: "/shred-icon.jpg",
    category: "Wallets",
    gallery: appGalleries.shred,
    github: "https://github.com/divin3circle/shred",
    githubStartCount: 1,
    age: 3,
    period: "months",
    language: "Go",
    size: 15,
  },
};

export const appPlatforms = {
  shred: {
    macos: {
      name: "macOS",
      oldestSupportedVersion: "10.15 Catalina",
      latestVersion: "13 Ventura",
      iconUrl: "/macos.png",
      description:
        "Fully supported on macOS platforms, but devices older than 2015 may experience performance issues.",
    },
    linux: {
      name: "Linux",
      oldestSupportedVersion: "Ubuntu 18.04 LTS",
      latestVersion: "Ubuntu 24.04 LTS",
      iconUrl: "/linux.png",
      description:
        "Compatible with most modern Linux distributions. Ensure you have the necessary dependencies installed.",
    },
    windows: {
      name: "Windows",
      oldestSupportedVersion: "Windows 10",
      latestVersion: "Windows 11",
      iconUrl: "/windows.jpg",
      description:
        "Supported on Windows 10 and later versions. WSL is recommended for optimal performance.",
    },
  },
  gosetup: {
    macos: {
      name: "macOS",
      oldestSupportedVersion: "10.15 Catalina",
      latestVersion: "13 Ventura",
      iconUrl: "/macos.png",
      description:
        "Fully supported on macOS platforms, but devices older than 2015 may experience performance issues.",
    },
    linux: {
      name: "Linux",
      oldestSupportedVersion: "Ubuntu 18.04 LTS",
      latestVersion: "Ubuntu 24.04 LTS",
      iconUrl: "/linux.png",
      description:
        "Compatible with most modern Linux distributions. Ensure you have the necessary dependencies installed.",
    },
    windows: {
      name: "Windows",
      oldestSupportedVersion: "Windows 10",
      latestVersion: "Windows 11",
      iconUrl: "/windows.jpg",
      description:
        "Supported on Windows 10 and later versions. WSL is recommended for optimal performance.",
    },
  },
};

export const appVersionReport = {
  shred: [
    {
      version: "1.1",
      releaseDate: "January 15, 2026",
      changelog: [
        "Added Docker support for easy deployment.",
        "Improved TUI responsiveness and performance.",
        "Fixed bugs related to wallet encryption.",
      ],
      description:
        "Major update introducing Docker support and performance improvements.",
    },
    {
      version: "1.0",
      releaseDate: "December 1, 2025",
      changelog: [
        "Initial release of Shred wallet.",
        "Features include secure wallet management, Hedera integration, and multi-wallet support.",
      ],
      description: "Initial release of Shred with core wallet functionalities.",
    },
  ],
  gosetup: [
    {
      version: "1.0",
      releaseDate: "February 10, 2026",
      changelog: [
        "Initial release of GoSetup.",
        "Features include interactive CLI, complete project structure, and Docker support.",
      ],
      description:
        "Initial release of GoSetup with essential project scaffolding features.",
    },
    {
      version: "0.9",
      releaseDate: "January 5, 2026",
      changelog: [
        "Beta release for testing and feedback.",
        "Basic project scaffolding and TUI implemented.",
      ],
      description: "Beta version of GoSetup for initial user feedback.",
    },
  ],
};

export const privacyPolicies = {
  shred: {
    description:
      "Shred is committed to protecting your privacy. We do not collect personal data without your consent. For more details, please read our full privacy policy.",
    lastUpdated: "January 1, 2026",
    link: "https://example.com/shred-privacy-policy",
  },
  gosetup: {
    description:
      "GoSetup respects your privacy and is dedicated to safeguarding your personal information. We do not share your data with third parties. Please refer to our complete privacy policy for more information.",
    lastUpdated: "February 1, 2026",
    link: "https://example.com/gosetup-privacy-policy",
  },
};

export function getAppData(appName: string) {
  return appData[appName as keyof typeof appData];
}

export function getAppPlatforms(appName: string): Record<string, Platform> {
  return appPlatforms[appName as keyof typeof appPlatforms];
}

export function getAppVersionReport(appName: string): VersionHistory[] {
  return appVersionReport[appName as keyof typeof appVersionReport];
}

export function getPrivacyPolicy(appName: string): PrivacyPolicy {
  return privacyPolicies[appName as keyof typeof privacyPolicies];
}

export function getAppDeveloper(appName: string): string {
  return appData[appName as keyof typeof appData].developer;
}

export function getDeveloperApps(developerName: string): AppData[] {
  return Object.values(appData).filter(
    (app) => app.developer === developerName
  );
}

export function getAppGallery(appName: string): Gallery {
  return appData[appName as keyof typeof appData].gallery;
}

export function getAppGitHub(appName: string): string {
  return appData[appName as keyof typeof appData].github;
}

export function getAppGitHubStarCount(appName: string): number {
  return appData[appName as keyof typeof appData].githubStartCount;
}

export function getAppAge(appName: string): { age: number; period: string } {
  const app = appData[appName as keyof typeof appData];
  return { age: app.age, period: app.period };
}

export function getAppLanguage(appName: string): string {
  return appData[appName as keyof typeof appData].language;
}

export function getAppSize(appName: string): number {
  return appData[appName as keyof typeof appData].size;
}
