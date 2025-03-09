import { StyleSheet } from 'react-native';

// צבעים ראשיים
export const COLORS = {
    primary: '#3498DB',       // כחול - צבע ראשי
    secondary: '#2C3E50',     // כחול כהה - כותרות
    accent: '#F39C12',        // כתום - הדגשות
    background: '#FFFFFF',    // לבן - רקע
    lightGray: '#F8F9FA',     // אפור בהיר - רקע אלמנטים
    mediumGray: '#E5E5E5',    // אפור בינוני - גבולות
    darkGray: '#7F8C8D',      // אפור כהה - טקסט משני
    success: '#2ECC71',       // ירוק - פעולות חיוביות
    error: '#E74C3C',         // אדום - שגיאות
    white: '#FFFFFF',         // לבן
    disabled: '#BDC3C7',      // אפור - כפתורים מושבתים
    selectedBackground: '#EBF5FB', // רקע פריט שנבחר
};

// טיפוגרפיה
export const TYPOGRAPHY = {
    largeTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: COLORS.secondary,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.secondary,
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.darkGray,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        color: COLORS.secondary,
        lineHeight: 22,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.secondary,
        marginBottom: 8,
    },
    smallText: {
        fontSize: 14,
        color: COLORS.darkGray,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.white,
    },
};

// מרווחים
export const SPACING = {
    tiny: 4,
    small: 8,
    medium: 16,
    large: 24,
    extraLarge: 32,
    huge: 40,
};

// עיגול פינות
export const RADIUS = {
    small: 4,
    medium: 8,
    large: 12,
    circle: 60,
};

// מידות
export const SIZES = {
    buttonHeight: 48,
    inputHeight: 48,
    iconSize: 24,
    headerHeight: 60,
    footerHeight: 60,
};

// צללים
export const SHADOWS = {
    small: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    medium: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 4,
    },
    large: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 6,
    },
};

// סגנונות משותפים
const GlobalStyles = StyleSheet.create({
    // מיכלים
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    scrollViewContainer: {
        flex: 1,
        padding: SPACING.medium,
    },
    flexOne: {
        flex: 1,
    },

    // כותרות ומשנה כותרות
    header: {
        marginBottom: SPACING.large,
    },
    title: {
        ...TYPOGRAPHY.largeTitle,
        marginBottom: SPACING.small,
    },
    subtitle: {
        ...TYPOGRAPHY.subtitle,
        marginBottom: SPACING.small,
    },

    // טפסים
    formContainer: {
        marginBottom: SPACING.medium,
    },
    inputGroup: {
        marginBottom: SPACING.medium,
    },
    inputGroupHalfRight: {
        flex: 1,
        marginBottom: SPACING.medium,
        marginRight: SPACING.medium,
    },
    inputGroupHalf: {
        flex: 1,
        marginBottom: SPACING.medium,
    },
    label: {
        ...TYPOGRAPHY.label,
    },
    input: {
        backgroundColor: COLORS.lightGray,
        borderWidth: 1,
        borderColor: COLORS.mediumGray,
        borderRadius: RADIUS.medium,
        padding: SPACING.medium,
        fontSize: 16,
    },
    textArea: {
        minHeight: 100,
        textAlignVertical: 'top',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    // כרטיסיות
    card: {
        backgroundColor: COLORS.lightGray,
        borderRadius: RADIUS.medium,
        padding: SPACING.medium,
        marginBottom: SPACING.medium,
        borderWidth: 2,
        borderColor: COLORS.mediumGray,
    },
    cardSelected: {
        borderColor: COLORS.primary,
        backgroundColor: COLORS.selectedBackground,
    },
    cardRow: {
        backgroundColor: COLORS.lightGray,
        borderRadius: RADIUS.medium,
        padding: SPACING.medium,
        marginBottom: SPACING.medium,
        borderWidth: 2,
        borderColor: COLORS.mediumGray,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardContent: {
        flex: 1,
    },

    // כפתורים
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.medium,
        paddingHorizontal: SPACING.medium,
        borderRadius: RADIUS.medium,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        backgroundColor: COLORS.disabled,
    },
    buttonText: {
        ...TYPOGRAPHY.buttonText,
    },

    // תגיות
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: SPACING.small,
    },
    tag: {
        backgroundColor: COLORS.lightGray,
        borderRadius: RADIUS.large,
        paddingVertical: 6,
        paddingHorizontal: 12,
        margin: 4,
        borderWidth: 1,
        borderColor: COLORS.mediumGray,
    },
    tagSelected: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.secondary,
    },
    tagText: {
        ...TYPOGRAPHY.smallText,
    },
    tagTextSelected: {
        color: COLORS.white,
    },

    // פוטר
    footer: {
        padding: SPACING.medium,
        borderTopWidth: 1,
        borderTopColor: COLORS.mediumGray,
        backgroundColor: COLORS.background,
    },

    // אנימציה וכללי
    logoContainer: {
        alignItems: 'center',
    },
    logoPlaceholder: {
        width: RADIUS.circle * 2,
        height: RADIUS.circle * 2,
        borderRadius: RADIUS.circle,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SPACING.large,
    },
    logoText: {
        fontSize: 60,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    checkmark: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    checkmarkText: {
        color: COLORS.white,
        fontWeight: 'bold',
    },
    titleMarginSmall: {
        ...TYPOGRAPHY.largeTitle,
        marginBottom: SPACING.small,
    },
});

export default GlobalStyles;