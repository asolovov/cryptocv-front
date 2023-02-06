import {Text, View} from "@react-pdf/renderer";
import {styles} from "@/components/pdf/PDFStyles";

const PdfSkills = ({skills}) => {
    return (
        <>
            {skills.map((skill, index) =>
                <View key={index}>
                    <Text style={styles.textBold}>{skill.name}</Text>
                    <Text style={styles.text}>{skill.description}</Text>
                </View>
            )}
        </>
    );
};

export default PdfSkills;