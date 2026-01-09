const shredMarkdown =
  "Shred is a terminal-native Hedera wallet built with Go. Manage your Hedera accounts, send and receive HBAR, and interact with the Hedera network directly from your terminal.\n\n# Features 🔐 Secure Wallet Management: BIP-39 mnemonic generation with Argon2id encryption💰 Hedera Integration: Full support for Hedera accounts and HBAR transactions🎨 Beautiful TUI: Terminal user interface built with Bubble Tea🔄 Multi-Wallet Support: Create and manage multiple wallets🚀 Cross-Platform: Works on macOS, Windows, and Linux🔒 Auto-Lock: Automatic wallet locking after inactivity# InstallationFollow the instructions on the [Shred GitHub Repository](https://github.com/divin3circle/shred)";

const markdownContent: Record<string, string> = {
  shred: shredMarkdown,
};

export function getMarkdownContent(appName: string): string {
  return markdownContent[appName] || "";
}
