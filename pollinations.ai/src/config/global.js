// New color palette based on enter.pollinations.ai design
// Color palette extracted from websiteimprovements/color-thief-palette

export const SHOW_PROMPT_TOOLTIP = false;

export const Colors = {
    // Primary colors from enter.pollinations.ai palette
    mint: "#D7FAE5",         // Light mint green - primary background
    darkBlue: "#3B4656",     // Dark blue-gray - primary text/headers
    magenta: "#C54B91",      // Magenta/pink - accent color
    grayTeal: "#819798",     // Gray-teal - secondary elements
    gold: "#E7BC44",         // Gold/yellow - highlights
    cream: "#F0D886",        // Light gold/cream - secondary highlight
    
    // Legacy color mappings for backward compatibility
    lime: "#E7BC44",         // Map to gold for accent elements
    offwhite: "#D7FAE5",     // Map to mint for light backgrounds
    offblack: "#3B4656",     // Map to darkBlue for dark text
    offblack2: "#2D3642",    // Slightly darker variant of darkBlue
    gray1: "#819798",        // Map to grayTeal
    gray2: "#6B7A7B",        // Darker variant of grayTeal
    special: "#C54B91",      // Map to magenta for special elements
};

export const Fonts = {
    title: "Maven Pro",
    headline: "Mako",
    parameter: "Duru Sans",
};

// Step 1: Create a new mapping object for section backgrounds
// Updated to match enter.pollinations.ai light theme design
export const SectionBG = {
    header: {
        color: Colors.mint,
        gradient: false,
    },
    hero: {
        color: Colors.mint,
        gradient: false,
    },
    news: {
        color: Colors.mint,
        gradient: false,
    },
    feedImage: {
        color: Colors.darkBlue,
        gradient: false,
    },
    feedText: {
        color: Colors.darkBlue,
        gradient: false,
    },
    project: {
        color: Colors.mint,
        gradient: false,
    },
    integration: {
        color: Colors.darkBlue,
        gradient: false,
    },
    community: {
        color: Colors.darkBlue,
        gradient: false,
    },
    team: {
        color: Colors.mint,
        gradient: false,
    },
    supporter: {
        color: Colors.mint,
        gradient: false,
    },
    footer: {
        color: Colors.mint,
        gradient: false,
    },
};
