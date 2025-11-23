import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {hapticFeedback, hapticReaction} from "@/utils/nexus_hapatics";


function HapticsDemo() {

    // List all the aptics in a array
    const feedbackTypes = ['success', 'error', 'warning', 'light', 'medium', 'heavy', 'soft', 'rigid', 'selection']
    const reactionTypes = ['mal', 'normal', 'bien', 'excelente', 'feliz']


    return (
        <View style={styles.container}>
            <Text style={styles.title} className="text-center color-dark-foreground">Haptics Demo</Text>

            <Text style={styles.sectionLabel} className={"color-dark-info"}>Feedback Types:</Text>
            <View style={styles.grid}>
                {feedbackTypes.map((type) => (
                    <TouchableOpacity
                        key={type}
                        onPress={() => hapticFeedback(type as any)}
                        style={[styles.button, {backgroundColor: '#007AFF'}]}
                    >
                        <Text style={styles.buttonText}>{type}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Text style={[styles.sectionLabel, {marginTop: 12}]} className={"color-dark-info"}>Reaction Types:</Text>
            <View style={styles.grid}>
                {reactionTypes.map((type) => (
                    <TouchableOpacity
                        key={type}
                        onPress={() => hapticReaction(type as any)}
                        style={[styles.button, {backgroundColor: '#34C759'}]}
                    >
                        <Text style={styles.buttonText}>{type}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 8,
    },
    sectionLabel: {
        marginBottom: 8,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    button: {
        width: '23%', // leave small gaps between columns
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 12,
        textAlign: 'center'
    }
});

export default HapticsDemo;